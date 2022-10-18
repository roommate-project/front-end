import React, { useEffect, Fragment, useState, useRef } from 'react';
import {
  convertUTCtoLocalDate,
  convertUTCtoLocalTime,
} from 'utils/convertUTCtoLocalTime';
import {
  ChatHeader,
  ChatBubble,
  ChatContent,
  ChatFlexBox,
  ChatHeaderContents,
  ChatUserImg,
  ChatSendTime,
  ChatSendBox,
  ChatSendIcon,
  ChatSendInput,
  ChatSendIconButton,
  ChatDate,
  EmptyChatRoomMessage,
  ChatListContainer,
  PreviewImage,
  ChatPageContainer,
} from 'design/chatStyles/chatStyles';
import {
  faArrowLeft,
  faCamera,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { MutationFunction, useMutation } from '@tanstack/react-query';
import { getChatRoom } from 'api/chatApi';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderIcon } from 'components/header/headerStyles';
import { AxiosError } from 'axios';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImgInput } from 'design/commonStyles';
import { convertFileToBase64 } from 'utils/convertFileToBase64';

interface IChatData {
  data: {
    chats: [
      {
        image: null | ImageData;
        isImage: boolean;
        isMe: boolean;
        message: string;
        sendTime: string;
      }
    ];
    userInfo: {
      userName: string;
      userId: number;
      age: number;
      location: string;
    };
  };
}
interface FormValue {
  message: string;
  image: FileList;
}

let stompClient: any;

function ChatPage() {
  const { roomId } = useParams();
  const navigation = useNavigate();
  const [messages, setMessages] = useState<any[]>([]);
  const [previewImg, setPreviewImg] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, dirtyFields },
  } = useForm<FormValue>({ mode: 'all' });
  const { mutate, data } = useMutation<
    IChatData,
    AxiosError,
    string,
    MutationFunction
  >(getChatRoom, {
    onError: error => alert(error),
  });
  const currentTime = new Date() + '';
  const datesArray = new Set();
  const bottomRef = useRef<HTMLDivElement>(null);
  const uploadImg = watch('image');

  useEffect(() => {
    if (roomId !== undefined) mutate(roomId);

    //webSocket handshake
    stompClient = Stomp.over(function () {
      return new SockJS(`${process.env.REACT_APP_SERVER_IP}/ws-stomp`);
    });
    stompClient.connect({}, onConnected, (error: any) => {
      alert(error);
    });

    //채팅방 입장 시 하단 이동
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }, []);

  useEffect(() => {
    //새 메세지 입력 시 하단으로 이동
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (uploadImg && uploadImg.length > 0) {
      const file = uploadImg[0];
      setPreviewImg(URL.createObjectURL(file));
    }
  }, [uploadImg]);

  const userProfileImg = `${process.env.REACT_APP_SERVER_IP}/api/user/${data?.data.userInfo.userId}/img/represents`;

  const displayDate = (sendDate: string) => {
    datesArray.add(sendDate);
    return sendDate;
  };

  const onConnected = () => {
    stompClient.subscribe(`/sub/chat/room/${roomId}`, onMessageReceived);
  };

  const onMessageReceived = (chatMessage: any) => {
    setMessages(prev => [...prev, JSON.parse(chatMessage.body)]);
  };

  const sendMessage = (chat: FormValue, convertedImage?: string) => {
    let chatMessage = {
      type: convertedImage ? 'IMAGE' : 'CHAT',
      roomId,
      message: convertedImage ? null : chat.message,
      image: convertedImage ? convertedImage : null,
      senderId: sessionStorage.getItem('userId'),
    };
    stompClient.send(`/pub/chat/message`, {}, JSON.stringify(chatMessage));
  };

  const onSumbitMessages: SubmitHandler<FormValue> = data => {
    if (data.image.length > 0) {
      const file = data.image[0];
      convertFileToBase64(file, (convertedImage: string) => {
        sendMessage(data, convertedImage);
        reset();
        setPreviewImg('');
      });
    } else if (data.message.length > 0) {
      sendMessage(data);
      reset();
    }
  };

  return (
    <ChatPageContainer>
      <ChatHeader>
        <HeaderIcon rights={false} left={true} isVisible={true}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              navigation(-1);
            }}
          />
        </HeaderIcon>
        <ChatHeaderContents>
          <ChatContent fontSize={20}>
            {data?.data && data.data.userInfo.userName}
          </ChatContent>
          <ChatContent fontSize={12}>
            {data?.data && data.data.userInfo.age}세 |{' '}
            {data?.data && data.data.userInfo.location}
          </ChatContent>
        </ChatHeaderContents>
      </ChatHeader>
      <ChatListContainer>
        {data?.data &&
          data.data.chats.reverse().map((chat, index) => {
            const sendDate = convertUTCtoLocalDate(chat.sendTime);
            return (
              <Fragment key={index}>
                {datesArray.has(sendDate) ? null : (
                  <ChatDate>{displayDate(sendDate)}</ChatDate>
                )}
                <ChatFlexBox isMe={chat.isMe}>
                  <ChatUserImg
                    src={userProfileImg}
                    alt="user image"
                    isMe={chat.isMe}
                  />
                  <ChatBubble isMe={chat.isMe}>
                    {chat.isImage === true ? (
                      <img src={`data:image/png;base64,${chat.image}`} />
                    ) : (
                      chat.message
                    )}
                  </ChatBubble>
                  <ChatSendTime>
                    {convertUTCtoLocalTime(chat.sendTime)}
                  </ChatSendTime>
                </ChatFlexBox>
              </Fragment>
            );
          })}
        {messages.map((chat, index) => {
          const sendDate = convertUTCtoLocalDate(currentTime);
          return (
            <Fragment key={index}>
              {datesArray.has(sendDate) ? null : (
                <ChatDate>{displayDate(sendDate)}</ChatDate>
              )}
              <ChatFlexBox
                isMe={chat.senderId == sessionStorage.getItem('userId')}
              >
                <ChatUserImg
                  src={userProfileImg}
                  alt="user image"
                  isMe={chat.senderId == sessionStorage.getItem('userId')}
                />
                <ChatBubble
                  isMe={chat.senderId == sessionStorage.getItem('userId')}
                >
                  {chat.type === 'IMAGE' ? (
                    <img src={`data:image/png;base64,${chat.image}`} />
                  ) : (
                    chat.message
                  )}
                </ChatBubble>
                <ChatSendTime>
                  {convertUTCtoLocalTime(currentTime)}
                </ChatSendTime>
              </ChatFlexBox>
            </Fragment>
          );
        })}
        <div ref={bottomRef} />
        {data?.data && data.data.chats.length <= 0 ? (
          <EmptyChatRoomMessage isEmpty={messages.length <= 0}>
            '채팅 내역이 없습니다!'
          </EmptyChatRoomMessage>
        ) : null}
        <ChatSendBox onSubmit={handleSubmit(onSumbitMessages)}>
          <ChatSendIconButton type="button">
            <ChatSendIcon icon={faCamera} />
            <ImgInput type="file" accept="image/*" {...register('image')} />
          </ChatSendIconButton>
          {previewImg ? (
            <div style={{ width: '90%' }}>
              <PreviewImage src={previewImg} />
            </div>
          ) : (
            <ChatSendInput
              {...register('message', { required: true })}
              type="text"
              name="message"
              id="message"
              placeholder="메세지를 입력하세요!"
            />
          )}
          <ChatSendIconButton type="submit">
            <ChatSendIcon
              icon={faPaperPlane}
              $isActive={isValid || !!dirtyFields.image}
            />
          </ChatSendIconButton>
        </ChatSendBox>
      </ChatListContainer>
    </ChatPageContainer>
  );
}

export default ChatPage;

import React, { useEffect, Fragment, useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  convertUTCtoLocalDate,
  convertUTCtoLocalTime,
} from 'utils/convertUTCtoLocalTime';
import {
  ChatHeader,
  ChatBox,
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
}

let stompClient: any;

function ChatPage() {
  const { roomId } = useParams();
  const navigation = useNavigate();
  const [messages, setMessages] = useState<any[]>([]);
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const { mutate, data } = useMutation<
    IChatData,
    AxiosError,
    string,
    MutationFunction
  >(getChatRoom, {
    onError: error => alert(error),
  });

  useEffect(() => {
    if (roomId !== undefined) mutate(roomId);

    stompClient = Stomp.over(function () {
      return new SockJS(`${process.env.REACT_APP_SERVER_IP}/ws-stomp`);
    });
    stompClient.connect({}, onConnected, (error: any) => {
      alert(error);
    });
  }, []);

  const userProfileImg = `${process.env.REACT_APP_SERVER_IP}/api/user/${data?.data.userInfo.userId}/img/represents`;

  const displayDate = (date: string) => {
    const newDate = convertUTCtoLocalDate(date);
    const prevDate = convertUTCtoLocalDate(data!.data.chats[0].sendTime);
    if (prevDate !== newDate && prevDate < newDate) {
      return newDate;
    } else if (prevDate === newDate) {
      return null;
    }
  };

  const onMessageReceived = (chatMessage: any) => {
    if (chatMessage.body) {
      setMessages(prev => [...prev, JSON.parse(chatMessage.body)]);
    } else {
      alert('got empty message');
    }
  };

  const sendMessage = (input: string) => {
    let chatMessage = {
      type: 'CHAT',
      roomId,
      message: input,
      senderId: sessionStorage.getItem('userId'),
    };
    stompClient.send(`/pub/chat/message`, {}, JSON.stringify(chatMessage));
  };

  const onConnected = () => {
    stompClient.subscribe(`/sub/chat/room/${roomId}`, onMessageReceived);
  };

  const onSumbitMessages: SubmitHandler<FormValue> = data => {
    sendMessage(data.message);
    reset();
  };

  return (
    <PageContainer>
      <ChatHeader>
        <HeaderIcon rights={false} left={true}>
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
      {data?.data &&
        data.data.chats.map((chat, index) => (
          <Fragment key={index}>
            {displayDate(chat.sendTime) !== null ? (
              <ChatDate>{displayDate(chat.sendTime)}</ChatDate>
            ) : null}
            <ChatFlexBox isMe={chat.isMe}>
              {chat.isMe ? (
                <>
                  <ChatSendTime isMe={chat.isMe}>
                    {convertUTCtoLocalTime(chat.sendTime)}
                  </ChatSendTime>
                  <ChatBox isMe={chat.isMe}>{chat.message}</ChatBox>
                </>
              ) : (
                <>
                  <ChatUserImg src={userProfileImg} alt="user image" />
                  <ChatBox isMe={chat.isMe}>{chat.message}</ChatBox>
                  <ChatSendTime isMe={chat.isMe}>
                    {convertUTCtoLocalTime(chat.sendTime)}
                  </ChatSendTime>
                </>
              )}
            </ChatFlexBox>
          </Fragment>
        ))}
      {messages.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
      <EmptyChatRoomMessage>
        {data?.data && data.data.chats.length <= 0
          ? '채팅 내역이 없습니다!'
          : null}
      </EmptyChatRoomMessage>
      <ChatSendBox onSubmit={handleSubmit(onSumbitMessages)}>
        <ChatSendIconButton>
          <ChatSendIcon icon={faCamera} />
        </ChatSendIconButton>
        <ChatSendInput
          {...register('message')}
          type="text"
          name="message"
          id="message"
          placeholder="메세지를 입력하세요!"
        />
        <ChatSendIconButton type="submit">
          <ChatSendIcon icon={faPaperPlane} />
        </ChatSendIconButton>
      </ChatSendBox>
    </PageContainer>
  );
}

export default ChatPage;

import React, { useEffect, Fragment } from 'react';
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
  /* ChatReadStatus, */
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
/* import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs'; */

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

function ChatPage() {
  const { roomId } = useParams();
  const navigation = useNavigate();
  const { mutate, data } = useMutation<
    IChatData,
    AxiosError,
    string,
    MutationFunction
  >(getChatRoom, {
    onError: error => alert(error),
    onSuccess: data => console.log(data.data),
  });

  useEffect(() => {
    if (roomId !== undefined) mutate(roomId);
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

  /* let stompClient: any;
  const socket = new SockJS(`${process.env.REACT_APP_SERVER_IP}/ws-stomp`);
  stompClient = Stomp.over(socket);

  const onConnected = () => {
    stompClient.subscribe(`/sub/chat/room/${roomId}`, function (frame) {
      console.log(JSON.parse(frame.body));
    });
  };

  const sendMessage = () => {
    const message = {
      sender: user.nickname,
      message: userData.message,
      status: 'MESSAGE',
      type: 'TALK',
      roomId: ctId,
      profileImg_url: user.profile_image_url + user.file_name,
    };
    stompClient.send(`/pub/chat/room/${roomId}`, {}, JSON.stringify(message));
  };

  stompClient.connect(
    {},
    () => console.log('stomp connection'),
    onConnected,
    sendMessage
  ); */

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
                    {/*                     <ChatReadStatus>
                      {chat.isRead ? '' : '안읽음'}
                    </ChatReadStatus> */}
                  </ChatSendTime>
                  <ChatBox isMe={chat.isMe}>{chat.message}</ChatBox>
                </>
              ) : (
                <>
                  <ChatUserImg src={userProfileImg} alt="user image" />
                  <ChatBox isMe={chat.isMe}>{chat.message}</ChatBox>
                  <ChatSendTime isMe={chat.isMe}>
                    {convertUTCtoLocalTime(chat.sendTime)}
                    {/*                     <ChatReadStatus>
                      {chat.isRead ? '' : '안읽음'}
                    </ChatReadStatus> */}
                  </ChatSendTime>
                </>
              )}
            </ChatFlexBox>
          </Fragment>
        ))}
      <EmptyChatRoomMessage>
        {data?.data && data.data.chats.length <= 0
          ? '채팅 내역이 없습니다!'
          : null}
      </EmptyChatRoomMessage>
      <ChatSendBox>
        <ChatSendIconButton>
          <ChatSendIcon icon={faCamera} />
        </ChatSendIconButton>
        <ChatSendInput
          type="text"
          name="message"
          id="message"
          placeholder="메세지를 입력하세요!"
        />
        <ChatSendIconButton>
          <ChatSendIcon icon={faPaperPlane} />
        </ChatSendIconButton>
      </ChatSendBox>
    </PageContainer>
  );
}

export default ChatPage;

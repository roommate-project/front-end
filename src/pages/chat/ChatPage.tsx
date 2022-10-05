import React, { useEffect, useState, Fragment } from 'react';
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
  ChatReadStatus,
  ChatSendBox,
  ChatSendIcon,
  ChatSendInput,
  ChatSendIconButton,
  ChatDate,
} from 'design/chatStyles/chatStyles';
import {
  faArrowLeft,
  faCamera,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { getChatRoom } from 'api/chatApi';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderIcon } from 'components/header/headerStyles';
/* import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs'; */

const chatDatas = {
  userInfo: {
    userName: '워니',
    userId: 2,
    userAge: 22,
    userRegion: '도봉구',
    userImg: 'http://img.segye.com/content/image/2020/05/28/20200528517713.jpg',
  },
  chats: [
    {
      sendData: '안녕하세요',
      isMe: true,
      sendTime: '2022-08-14T11:45:30',
      isRead: true,
    },
    {
      sendData: '네. 안녕하세요',
      isMe: false,
      sendTime: '2022-08-14T11:55:30',
      isRead: true,
    },
    {
      sendData: '룸메이트 구하시는거 맞죵?',
      isMe: true,
      sendTime: '2022-08-14T11:56:30',
      isRead: true,
    },
    {
      sendData: '네 그렇습니다.',
      isMe: false,
      sendTime: '2022-08-15T11:57:30',
      isRead: true,
    },
    {
      sendData:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima velit alias corrupti ea eius molestias? Eius, voluptatem beatae esse, nesciunt error quasi minima earum similique illum quam quidem voluptate!',
      isMe: false,
      sendTime: '2022-08-15T11:58:30',
      isRead: true,
    },
    {
      sendData: '그렇시군요',
      isMe: true,
      sendTime: '2022-08-15T13:10:30',
      isRead: false,
    },
  ],
};

function ChatPage() {
  const { roomId } = useParams();
  const navigation = useNavigate();

  const chatRoomMutation = useMutation(getChatRoom, {
    onSuccess: data => console.log(data.data),
    onError: error => alert(error),
  });

  useEffect(() => {
    chatRoomMutation.mutate(roomId);
  }, []);

  const displayDate = (date: string) => {
    const newDate = convertUTCtoLocalDate(date);
    const prevDate = convertUTCtoLocalDate(chatDatas.chats[0].sendTime);
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
          <ChatContent fontSize={20}>{chatDatas.userInfo.userName}</ChatContent>
          <ChatContent fontSize={12}>
            {chatDatas.userInfo.userRegion} | {chatDatas.userInfo.userAge}
          </ChatContent>
        </ChatHeaderContents>
      </ChatHeader>
      {chatDatas.chats.map((chat, index) => (
        <Fragment key={index}>
          {displayDate(chat.sendTime) !== null ? (
            <ChatDate>{displayDate(chat.sendTime)}</ChatDate>
          ) : null}
          <ChatFlexBox isMe={chat.isMe}>
            {chat.isMe ? (
              <>
                <ChatSendTime isMe={chat.isMe}>
                  {convertUTCtoLocalTime(chat.sendTime)}
                  <ChatReadStatus>{chat.isRead ? '' : '안읽음'}</ChatReadStatus>
                </ChatSendTime>
                <ChatBox isMe={chat.isMe}>{chat.sendData}</ChatBox>
              </>
            ) : (
              <>
                <ChatUserImg
                  src={chatDatas.userInfo.userImg}
                  alt="user image"
                />
                <ChatBox isMe={chat.isMe}>{chat.sendData}</ChatBox>
                <ChatSendTime isMe={chat.isMe}>
                  {convertUTCtoLocalTime(chat.sendTime)}
                  <ChatReadStatus>{chat.isRead ? '' : '안읽음'}</ChatReadStatus>
                </ChatSendTime>
              </>
            )}
          </ChatFlexBox>
        </Fragment>
      ))}
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

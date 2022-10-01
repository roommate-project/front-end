import React, { useEffect } from 'react';
import { PageContainer } from 'design/commonStyles';
import { convertUTCtoLocalTime } from 'utils/convertUTCtoLocalTime';
import {
  ChatBackground,
  ChatBox,
  ChatContent,
  ChatFlexBox,
  ChatFlexRowDiv,
  ChatMarginDiv,
  ChatUserImg,
  ChatSendTime,
  ChatReadStatus,
  ChatSendBox,
  ChatSendIcon,
  ChatSendInput,
  ChatSendIconButton,
} from 'design/chatStyles/chatStyles';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { getChatRoom } from 'api/chatApi';
import { useParams } from 'react-router-dom';

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
      sendTime: '2022-08-14T11:57:30',
      isRead: true,
    },
    {
      sendData:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima velit alias corrupti ea eius molestias? Eius, voluptatem beatae esse, nesciunt error quasi minima earum similique illum quam quidem voluptate!',
      isMe: false,
      sendTime: '2022-08-14T11:58:30',
      isRead: true,
    },
    {
      sendData: '그렇시군요',
      isMe: true,
      sendTime: '2022-08-14T13:10:30',
      isRead: false,
    },
  ],
};

function ChatPage() {
  const { roomId } = useParams();
  const chatRoomMutation = useMutation(getChatRoom, {
    onMutate: data => console.log(data),
    onError: error => alert(error),
  });

  useEffect(() => {
    chatRoomMutation.mutate(roomId);
  }, []);

  return (
    <PageContainer>
      <ChatBackground>
        <ChatFlexRowDiv>
          <ChatUserImg src={chatDatas.userInfo.userImg} alt="user image" />
          <ChatMarginDiv style={{ margin: '5px' }}>
            <ChatContent fontSize={20}>
              {chatDatas.userInfo.userName}
            </ChatContent>
            <ChatContent fontSize={12}>
              {chatDatas.userInfo.userRegion} | {chatDatas.userInfo.userAge} |{' '}
              {chatDatas.userInfo.userRegion}
            </ChatContent>
          </ChatMarginDiv>
        </ChatFlexRowDiv>
      </ChatBackground>
      {chatDatas.chats.map((chat, index) => (
        <div key={index}>
          <ChatFlexBox>
            <ChatBox isMe={chat.isMe}>{chat.sendData}</ChatBox>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ChatSendTime isMe={chat.isMe}>
                <ChatReadStatus>{chat.isRead ? '' : '안읽음'}</ChatReadStatus>
                {convertUTCtoLocalTime(chat.sendTime)}
              </ChatSendTime>
            </div>
          </ChatFlexBox>
        </div>
      ))}
      <ChatSendBox>
        <ChatSendInput type="text" name="message" id="message" />
        <ChatSendIconButton>
          <ChatSendIcon icon={faPaperPlane} />
        </ChatSendIconButton>
      </ChatSendBox>
    </PageContainer>
  );
}

export default ChatPage;

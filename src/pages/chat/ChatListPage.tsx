import React from 'react';
import { PageContainer } from 'design/commonStyles';
import { convertUTCtoLocalTime } from 'utils/convertUTCtoLocalTime';
import { Link } from 'react-router-dom';
import {
  ChatListTitle,
  ChatListBackgroundBox,
  ChatListBox,
  ChatListContent,
  ChatListImg,
  ChatListUserName,
  ChatListflexColumnBox,
  ChatListflexRowBox,
} from 'design/chatStyles/chatListStyles';
// import { getChatList } from 'api/chatApi';
// import { useQuery } from '@tanstack/react-query';

const chatList = [
  {
    roomId: 415,
    sender: 'fff',
    lastMessage: 'message test3',
    sendTime: '2022-09-26T14:22:03.800+00:00',
    representImageId: 27,
  },
  {
    roomId: 420,
    sender: 'ASDF',
    lastMessage: 'message test6',
    sendTime: '2022-09-26T15:46:30.869+00:00',
    representImageId: 27,
  },
];

function ChatListPage() {
  // const { chatList, isLoading } = useQuery(['getChatListData'], () =>
  //   getChatList(sessionStorage.getItem('userId'))
  // );

  // if (isLoading) {
  //   return <div>Loading....</div>;
  // }

  return (
    <PageContainer>
      <ChatListTitle>채팅 목록</ChatListTitle>
      <ChatListBackgroundBox>
        {chatList.map((chat, index) => (
          <Link to={`chat/${chat.roomId}`}>
            <ChatListBox key={index}>
              <ChatListImg
                src={`${process.env.REACT_APP_SERVER_IP}/api/user/${chat.representImageId}/img/represents`}
                alt="채팅 대표 이미지"
              />
              <ChatListflexColumnBox>
                <ChatListflexRowBox margin={10}>
                  <ChatListUserName>{chat.sender}</ChatListUserName>
                  <ChatListContent fontSize={8}>
                    {convertUTCtoLocalTime(chat.sendTime)}
                  </ChatListContent>
                </ChatListflexRowBox>
                <ChatListflexRowBox margin={5}>
                  <ChatListContent fontSize={12}>
                    {chat.lastMessage}
                  </ChatListContent>
                  {/* <ChatListContent fontSize={10}>
                    {chat.isRead ? '읽음' : '안읽음'}
                  </ChatListContent> */}
                </ChatListflexRowBox>
              </ChatListflexColumnBox>
            </ChatListBox>
          </Link>
        ))}
      </ChatListBackgroundBox>
    </PageContainer>
  );
}

export default ChatListPage;

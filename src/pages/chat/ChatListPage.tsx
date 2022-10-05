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
import { useQuery } from '@tanstack/react-query';
import { getChatList } from 'api/chatApi';

interface IChatListData {
  data: [
    {
      roomId: number;
      lastMessage: string;
      sendTime: string;
      userInfo: {
        userId: number;
        age: number;
        location: string;
        userName: string;
      };
    }
  ];
}

function ChatListPage() {
  const { data, isLoading } = useQuery<IChatListData>(
    ['getChatListData'],
    () => getChatList(sessionStorage.getItem('userId')),
    {
      onError: error => alert(error),
      onSuccess: data => console.log(data),
    }
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <PageContainer>
      <ChatListTitle>채팅 목록</ChatListTitle>
      <ChatListBackgroundBox>
        {data &&
          data.data.map((room, index) => (
            <ChatListBox key={index}>
              <Link to={`chat/${room.roomId}`}>
                <ChatListImg
                  src={`${process.env.REACT_APP_SERVER_IP}/api/user/${room.userInfo.userId}/img/represents`}
                  alt="채팅 대표 이미지"
                />
                <ChatListflexColumnBox>
                  <ChatListflexRowBox margin={10}>
                    <ChatListUserName>
                      {room.userInfo.userName}
                    </ChatListUserName>
                    <ChatListContent fontSize={8}>
                      {convertUTCtoLocalTime(room.sendTime)}
                    </ChatListContent>
                  </ChatListflexRowBox>
                  <ChatListflexRowBox margin={5}>
                    <ChatListContent fontSize={12}>
                      {room.lastMessage}
                    </ChatListContent>
                    {/*                     <ChatListContent fontSize={10}>
                      {room.isRead ? '읽음' : '안읽음'}
                    </ChatListContent> */}
                  </ChatListflexRowBox>
                </ChatListflexColumnBox>
              </Link>
            </ChatListBox>
          ))}
      </ChatListBackgroundBox>
    </PageContainer>
  );
}

export default ChatListPage;

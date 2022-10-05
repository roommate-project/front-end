import React from 'react';
import { PageContainer } from 'design/commonStyles';
import { convertUTCtoLocalTime } from 'utils/convertUTCtoLocalTime';
import { Link } from 'react-router-dom';
import {
  ChatListBackgroundBox,
  ChatListBox,
  ChatListContent,
  ChatListImg,
  ChatListUserName,
  ChatListInfoBox,
  ChatListflexBox,
  ChatListTimeflexBox,
} from 'design/chatStyles/chatListStyles';
import { useQuery } from '@tanstack/react-query';
import { getChatList } from 'api/chatApi';
import { EmptyChatRoomMessage } from 'design/chatStyles/chatStyles';

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
      <ChatListBackgroundBox>
        {data &&
          data.data.map((room, index) => (
            <ChatListBox key={index}>
              <Link to={`chat/${room.roomId}`}>
                <ChatListInfoBox>
                  <ChatListImg
                    src={`${process.env.REACT_APP_SERVER_IP}/api/user/${room.userInfo.userId}/img/represents`}
                    alt="채팅 대표 이미지"
                  />
                  <ChatListflexBox>
                    <ChatListUserName>
                      {room.userInfo.userName}
                    </ChatListUserName>
                    <ChatListContent fontSize={12}>
                      {room.lastMessage
                        ? room.lastMessage
                        : '대화기록이 없습니다.'}
                    </ChatListContent>
                  </ChatListflexBox>
                  <ChatListTimeflexBox>
                    <ChatListContent fontSize={8}>
                      {convertUTCtoLocalTime(room.sendTime)}
                    </ChatListContent>
                    {/*                     <ChatListContent fontSize={10}>
                      {room.isRead ? '읽음' : '안읽음'}
                    </ChatListContent> */}
                  </ChatListTimeflexBox>
                </ChatListInfoBox>
              </Link>
            </ChatListBox>
          ))}
        <EmptyChatRoomMessage>
          {data?.data && data.data.length <= 0 ? '채팅 내역이 없습니다!' : null}
        </EmptyChatRoomMessage>
      </ChatListBackgroundBox>
    </PageContainer>
  );
}

export default ChatListPage;

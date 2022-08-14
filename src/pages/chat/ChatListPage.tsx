import React from 'react';
import { PageContainer } from '../../design/commonStyles';
import { convertUTCtoLocalTime } from 'utils/convertUTCtoLocalTime';
import {
  ChatListTitle,
  ChatListBackgroundBox,
  ChatListBox,
  ChatListContent,
  ChatListImg,
  ChatListUserName,
  ChatListflexColumnBox,
  ChatListflexRowBox,
} from 'design/chatListStyles/chatListStyles';

const chatList = [
  {
    senderName: '워니',
    lastMessage: '룸메 하고 시퍼용',
    isRead: false,
    sendTime: '2022-08-14T13:45:30',
    isLastMessage: true,
    representativeImage:
      'http://img.segye.com/content/image/2020/05/28/20200528517713.jpg',
  },
  {
    senderName: '수진',
    lastMessage: '룸메 하실래요?',
    isRead: true,
    sendTime: '2022-08-11T13:25:30',
    isLastMessage: false,
    representativeImage:
      'https://acnhcdn.com/latest/NpcBromide/NpcNmlHam01.png',
  },
  {
    senderName: '재성',
    lastMessage: '룸메 하십시다.',
    isRead: false,
    sendTime: '2022-08-05T15:45:30',
    isLastMessage: false,
    representativeImage: 'https://pbs.twimg.com/media/EY1guBiUYAE_xBr.jpg',
  },
  {
    senderName: '예린',
    lastMessage: '죄송해용 ㅜㅜ',
    isRead: false,
    sendTime: '2022-07-14T17:45:30',
    isLastMessage: true,
    representativeImage:
      'https://media.bunjang.co.kr/product/194450838_1_1658817566_w360.jpg',
  },
];

function ChatPage() {
  return (
    <PageContainer>
      <ChatListTitle>채팅 목록</ChatListTitle>
      <ChatListBackgroundBox>
        {chatList.map((chat, index) => (
          <ChatListBox key={index}>
            <ChatListImg
              src={chat.representativeImage}
              alt="채팅 대표 이미지"
            />
            <ChatListflexColumnBox>
              <ChatListflexRowBox margin={10}>
                <ChatListUserName>{chat.senderName}</ChatListUserName>
                <ChatListContent fontSize={8}>
                  {convertUTCtoLocalTime(chat.sendTime)}
                </ChatListContent>
              </ChatListflexRowBox>
              <ChatListflexRowBox margin={5}>
                <ChatListContent fontSize={12}>
                  {chat.lastMessage}
                </ChatListContent>
                <ChatListContent fontSize={10}>
                  {chat.isRead ? '읽음' : '안읽음'}
                </ChatListContent>
              </ChatListflexRowBox>
            </ChatListflexColumnBox>
          </ChatListBox>
        ))}
      </ChatListBackgroundBox>
    </PageContainer>
  );
}

export default ChatPage;

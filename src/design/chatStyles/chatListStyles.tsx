import styled from 'styled-components';

export const ChatListTitle = styled.p`
  font-size: 26px;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
`;

export const ChatListBackgroundBox = styled.div`
  background-color: ${props => props.theme.mainWhite};
  padding-top: 50px;
  height: 100vh;
  width: 100%;
`;

export const ChatListBox = styled.div`
  height: 80px;
  border-bottom: solid 1px ${props => props.theme.backgroundGrey};
  padding: 0 20px;
`;

export const ChatListInfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const ChatListflexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 20px;
`;

export const ChatListTimeflexBox = styled(ChatListflexBox)`
  margin: 0 0;
`;

export const ChatListImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ChatListUserName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const ChatListContent = styled.p<{ fontSize: number }>`
  font-size: ${props => `${props.fontSize}px`};
`;

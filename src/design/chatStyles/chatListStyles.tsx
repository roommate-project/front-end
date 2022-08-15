import styled from 'styled-components';

export const ChatListTitle = styled.p`
  font-size: 26px;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
`;

export const ChatListBackgroundBox = styled.div`
  background-color: ${props => props.theme.mainWhite};
  border-radius: 20px 20px 0 0;
  height: 92vh;
  width: 95%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 0 auto;
`;

export const ChatListBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px ${props => props.theme.mainGrey};
`;

export const ChatListImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 5px;
`;

export const ChatListflexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 5px;
`;

export const ChatListflexRowBox = styled('div')<{ margin: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${props => `${props.margin}px`};
`;

export const ChatListUserName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const ChatListContent = styled('p')<{ fontSize: number }>`
  font-size: ${props => `${props.fontSize}px`};
`;

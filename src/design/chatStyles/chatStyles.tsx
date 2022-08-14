import styled from 'styled-components';

export const ChatBackground = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

export const ChatFlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px ${props => props.theme.mainGrey};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 10px;
`;

export const ChatUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 5px;
`;

export const ChatMarginDiv = styled.div`
  margin: 5px;
`;

export const ChatContent = styled('p')<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const ChatFlexBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ChatBox = styled('p')<{ isMe: boolean }>`
  width: 40%;
  height: auto;
  margin: 10px;
  background-color: ${props =>
    props.isMe ? props.theme.mainWhite : props.theme.mainYellow};
  border-radius: ${props =>
    props.isMe ? '10px 10px 0 10px' : '0 10px 10px 10px'};
  border: ${props => (props.isMe ? `1px solid ${props.theme.mainGrey}` : '')};
  margin-left: ${props => (props.isMe ? 'auto' : 10)};
  padding: 10px;
`;

export const ChatSendTime = styled('p')<{ isMe: boolean }>`
  margin-left: ${props => (props.isMe ? 'auto' : 10)};
  font-size: 12px;
  margin-right: 10px;
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChatHeader = styled.div`
  position: fixed;
  width: 100%;
  max-width: 76.8rem;
  height: 48px;
  display: flex;
  background-color: ${props => props.theme.mainWhite};
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

export const ChatHeaderContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const ChatMarginDiv = styled.div`
  margin: 5px;
`;

export const ChatContent = styled.p<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const ChatFlexBox = styled.div<{ isMe: boolean }>`
  position: relative;
  top: 50px;
  display: flex;
  width: 100%;
  padding: 15px 20px;
  align-items: center;
  justify-content: ${props => (props.isMe ? 'flex-end' : 'flex-start')};
`;

export const ChatBox = styled('p')<{ isMe: boolean }>`
  max-width: 70%;
  height: auto;
  background-color: ${props =>
    props.isMe ? props.theme.mainYellow : props.theme.mainWhite};
  border-radius: ${props =>
    props.isMe ? '10px 10px 0 10px' : '0 10px 10px 10px'};
  border: ${props => (props.isMe ? '' : `1px solid ${props.theme.mainGrey}`)};
  padding: 10px;
  font-size: 16px;
`;

export const ChatSendTime = styled('div')<{ isMe: boolean }>`
  font-size: 12px;
`;

export const ChatReadStatus = styled.p`
  font-size: 10px;
`;

export const ChatSendBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 10px;
  max-width: 700px;
  width: 90%;
  height: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 20px;
  background-color: ${props => props.theme.backgroundGrey};
  z-index: 1;
`;

export const ChatSendInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

export const ChatSendIconButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const ChatSendIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin: 5px;
  color: rgb(133, 133, 133);
`;

export const ChatDate = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  justify-content: center;
`;

export const EmptyChatRoomMessage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
`;

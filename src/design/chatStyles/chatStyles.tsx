import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChatListContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100vh - 110px);
  top: 50px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

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

export const ChatUserImg = styled.img<{ isMe: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 4px;
  display: ${props => (props.isMe ? 'none' : 'block')};
`;

export const ChatMarginDiv = styled.div`
  margin: 5px;
`;

export const ChatContent = styled.p<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const ChatFlexBox = styled.div<{ isMe: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  padding: 15px 20px;
  align-items: ${props => (props.isMe ? 'flex-end' : 'flex-start')};
  flex-direction: ${props => (props.isMe ? 'row-reverse' : 'row')};
  gap: 5px;
`;

export const ChatBubble = styled('p')<{ isMe: boolean }>`
  max-width: 70%;
  height: auto;
  background-color: ${props =>
    props.isMe ? props.theme.mainYellow : props.theme.mainWhite};
  border-radius: ${props =>
    props.isMe ? '10px 10px 0 10px' : '0 10px 10px 10px'};
  border: ${props => (props.isMe ? '' : `1px solid ${props.theme.mainGrey}`)};
  padding: 10px;
  font-size: 16px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ChatSendTime = styled.div`
  font-size: 12px;
  margin: auto 0 3px 0;
`;

export const ChatSendBox = styled.form`
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
  align-items: center;
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
  overflow: hidden;
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
  display: flex;
  width: 100%;
  padding: 30px 20px;
  font-size: 16px;
  justify-content: center;
`;

export const EmptyChatRoomMessage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  font-size: 16px;
`;

export const PreviewImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  object-fit: cover;
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const ChatContent = styled.p<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const ChatFlexBox = styled.div<{ isMe: boolean }>`
  position: relative;
  top: 50px;
  display: flex;
  width: 100%;
  padding: 10px 20px;
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
  border: 1px solid #000000;
  margin: 5px;
  position: fixed;
  bottom: 80px;
  max-width: 700px;
  width: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 15px;
  background-color: ${props => props.theme.mainWhite};
`;

export const ChatSendInput = styled.input`
  border: none;
  padding: 8px;
  width: 80%;
  margin: 0 auto;
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
`;

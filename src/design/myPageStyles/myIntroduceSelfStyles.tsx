import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MyIntroduceBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px;
  height: auto;
`;

export const MyIntroduceTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const MyIntroduceContentTitle = styled.p`
  font-size: 18px;
  margin: 10px 0;
  background-color: ${props => props.theme.mainYellow};
  padding: 10px;
  width: 100%;
  text-align: start;
`;

export const MyIntroduceContent = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const MyIntroduceSelectBox = styled.select`
  width: 100px;
  padding: 5px;
  margin: 0 5px;
`;

export const MyIntroduceOptionBox = styled.option`
  width: 100px;
  padding: 5px;
`;

export const MyIntroduceRowBox = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: start;
  align-items: start;
`;

export const titleAndButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MyIntroduceTextArea = styled.textarea`
  width: 60%;
  height: 100px;
  border-radius: 10px;
  padding: 5px;
`;

export const MyIntroducePutButton = styled(FontAwesomeIcon)`
  font-size: 20px;
  border: 0;
  outline: 0;
  padding: 0 5px;
  cursor: pointer;
`;

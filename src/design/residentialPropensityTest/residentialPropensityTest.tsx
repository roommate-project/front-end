import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TestBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.mainPink};
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const TestBox = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color: ${props => props.theme.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestQuestion = styled.p`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin: 30px;
`;

export const TestAnswerBox = styled('p')<{
  type: boolean;
  isSelected: boolean;
}>`
  width: 70%;
  height: auto;
  word-break: keep-all;
  background-color: ${props =>
    props.type ? props.theme.mainOrange : props.theme.mainYellow};
  background-color: ${props => props.isSelected && props.theme.mainGrey};
  border-radius: 30px;
  border: 1px solid ${props => props.theme.mainBlack};
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  margin: 5px;
  padding: 15px;
`;

export const TestNextIcon = styled(FontAwesomeIcon)<{ isSelected: boolean }>`
  font-size: 38px;
  margin-top: 80px;
  color: ${props =>
    props.isSelected ? props.theme.mainRed : props.theme.mainGrey};
`;

export const TestFinishedButton = styled('div')<{ isSelected: boolean }>`
  width: 70%;
  height: auto;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.mainBlack};
  background-color: ${props =>
    props.isSelected ? props.theme.mainYellow : props.theme.mainGrey};
  margin: 20px;
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginForm = styled.form`
  width: 95%;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  line-height: 48px;
`;

export const LoginLabel = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const LoginCheckButton = styled(FontAwesomeIcon)`
  font-size: 48px;
  margin: 10px;
`;

export const LoginSubmitButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 48px;
  background-color: ${props =>
    props.isActive ? props.theme.mainRed : props.theme.mainGrey};
  border: 0;
  border-radius: 12px;
  margin-top: 20px;
  color: ${props =>
    props.isActive ? props.theme.mainWhite : props.theme.mainBlack};
`;

export const LoginErrorMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.mainRed};
  margin: 4px;
`;

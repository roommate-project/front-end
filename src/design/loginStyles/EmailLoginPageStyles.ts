import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmitBtn } from 'design/commonStyles';

export const LoginForm = styled.form`
  width: 95%;
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

export const LoginSubmitBtn = styled(SubmitBtn)`
  margin: 50px 0px;
`;

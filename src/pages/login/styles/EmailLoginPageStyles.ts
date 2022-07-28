import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginInput = styled.input`
  width: 80%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;

export const LoginCheckButton = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 10px;
`;

import styled from 'styled-components';

export const LoginMainDiv = styled.div`
  text-align: center;
`;

export const LoginSubTitle = styled.p`
  margin-top: 5%;
  line-height: 35px;
  word-break: keep-all;
`;

export const LoginDivs = styled.div`
  margin-top: 25px;
`;

export const LoginButton = styled.button<{ types: string }>`
  width: 20vw;
  height: 42px;
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  border: 0;
  border-radius: 10px;
  background-color: ${props => props.types === 'kakao' && '#FEE500'};
  background-color: ${props => props.types === 'naver' && '#2DB400'};
  background-color: ${props =>
    props.types === 'email' && props.theme.mainWhite};
  border: ${props => props.types === 'email' && 'solid'};
  display: flex;
  align-items: center;
  text-align: center;
`;

export const SignUpButton = styled.p`
  position: absolute;
  color: ${props => props.theme.fontGrey};
  font-size: 18px;
  text-decoration: underline;
  bottom: 50px;
`;

export const LoginIcon = styled.span`
  margin-right: 10px;
`;

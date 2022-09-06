import styled from 'styled-components';

export const LoginMainDiv = styled.div`
  text-align: center;
`;

export const LoginMarginTopTitle = styled('div')`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.mainRed};
  div {
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 300;
    color: ${props => props.theme.mainBlack};
  }
`;

export const LoginSubTitle = styled.p`
  margin-top: 5%;
  line-height: 35px;
  word-break: keep-all;
`;

export const LoginDivs = styled.div`
  margin-top: 25px;
`;

export const LoginButton = styled('button')<{ types: string }>`
  width: 20vw;
  height: 42px;
  display: block;
  item-align: center;
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
  color: ${props => props.theme.mainBlack};
  margin-top: 20px;
  font-size: 18px;
  text-decoration: underline;
`;

export const LoginIcon = styled.span`
  margin-right: 10px;
`;

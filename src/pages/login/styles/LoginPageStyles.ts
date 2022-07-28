import styled from 'styled-components';
interface TitleStyled {
  marginTop: number;
}

interface ButtonStyled {
  types: string;
}

export const LoginMainDiv = styled.div`
  text-align: center;
`;

export const LoginMarginTopTitle = styled('div')<TitleStyled>`
  margin-top: ${props => `${props.marginTop}%`};
  font-size: 1.5rem;
`;

export const LoginSubTitle = styled.p`
  margin-top: 5%;
  line-height: 35px;
  word-break: keep-all;
`;

export const LoginDivs = styled.div`
  margin-top: 25px;
`;

export const LoginButton = styled('button')<ButtonStyled>`
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
  font-size: 0.9rem;
  text-decoration: underline;
`;

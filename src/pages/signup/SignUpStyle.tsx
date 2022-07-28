import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${prop => prop.theme.mainWhite};
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: ${prop => prop.theme.mainRed};
  div {
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 300;
    color: ${prop => prop.theme.mainBlack};
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  span {
    font-size: 18px;
    color: ${prop => prop.theme.mainRed};
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
`;

export const EmailSingupBtn = styled(Button)`
  background-color: ${prop => prop.theme.mainWhite};
  color: ${prop => prop.theme.mainRed};
  box-shadow: 0 0 0 2px ${prop => prop.theme.mainRed} inset;
`;

export const KakaoSingupBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  color: #191919;
  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export const NaverSingupBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03c75a;
  color: white;
  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 48px;
  padding: 0px 16px;
`;

export const SendBtn = styled.button<{ isActive: boolean }>`
  height: 48px;
  border-radius: 12px;
  border-style: none;
  font-size: 18px;
  line-height: 48px;
  margin-top: 20px;
  background-color: ${prop =>
    prop.isActive ? prop.theme.mainRed : prop.theme.mainGrey};
  color: ${prop => prop.theme.mainWhite};
`;

export const ReSendBtn = styled(Button)`
  background-color: ${prop => prop.theme.mainRed};
  color: ${prop => prop.theme.mainWhite};
  margin-top: 40px;
`;

export const AuthBtn = styled(SendBtn)``;

/* export const NextBtn = styled.button<{ isActive: boolean }>`
  font-size: 50px;
  color: ${prop =>
    prop.isActive ? prop.theme.mainRed : prop.theme.backgroundGrey};
  margin-top: 60px;
  background-color: transparent;
  border-style: none;
`; */

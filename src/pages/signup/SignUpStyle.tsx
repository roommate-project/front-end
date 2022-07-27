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
  padding: 40px;
  gap: 20px;
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
  text-align: center;
  font-size: 18px;
  line-height: 48px;
`;

export const NextBtn = styled.div`
  font-size: 50px;
  color: ${prop => prop.theme.mainRed};
  margin-top: 60px;
`;

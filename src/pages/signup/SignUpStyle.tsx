import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainWhite};
`;

export const Title = styled.h1`
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

export const BtnBox = styled.div`
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
    color: ${props => props.theme.mainRed};
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

export const EmailSignUpBtn = styled(Button)`
  background-color: ${props => props.theme.mainWhite};
  color: ${props => props.theme.mainRed};
  box-shadow: 0 0 0 2px ${props => props.theme.mainRed} inset;
`;

export const SocialSignUpBtn = styled(Button)<{ types: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.types === 'kakao' ? '#fee500' : '#03c75a'};
  color: ${props => (props.types === 'kakao' ? '#191919' : 'white')};
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
  background-color: ${props =>
    props.isActive ? props.theme.mainRed : props.theme.mainGrey};
  color: ${props => props.theme.mainWhite};
`;

export const ReSendBtn = styled(Button)`
  background-color: ${props => props.theme.mainRed};
  color: ${props => props.theme.mainWhite};
  margin-top: 40px;
`;

export const AuthBtn = styled(SendBtn)``;

export const SubmitBtn = styled(SendBtn)<{ isActive: boolean }>``;

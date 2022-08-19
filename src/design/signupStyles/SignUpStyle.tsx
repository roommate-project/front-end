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

export const SubmitBtn = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  font-size: 18px;
  line-height: 48px;
  background-color: ${props =>
    props.isActive ? props.theme.mainRed : props.theme.mainGrey};
  color: ${props => props.theme.mainWhite};
  margin-top: 20px;
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  span {
    font-size: 18px;
    color: ${props => props.theme.mainRed};
  }
`;

export const SignUpButton = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
`;

export const EmailSignUpBtn = styled(SignUpButton)`
  background-color: ${props => props.theme.mainWhite};
  color: ${props => props.theme.mainRed};
  box-shadow: 0 0 0 2px ${props => props.theme.mainRed} inset;
`;

export const SocialSignUpBtn = styled(SignUpButton)<{ types: string }>`
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

export const SignUpInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  border: solid 2px ${props => props.theme.mainGrey};
  font-size: 18px;
  line-height: 48px;
  padding: 0px 16px;
  &:focus {
    outline-color: ${props => props.theme.mainRed};
  }
`;

export const EmailReSendBtn = styled(SignUpButton)`
  background-color: ${props => props.theme.mainRed};
  color: ${props => props.theme.mainWhite};
  margin-bottom: 10px;
`;

export const EmailSendBtn = styled(SubmitBtn)``;

export const EmailAuthSubmiBtn = styled(SubmitBtn)``;

export const SignUpBtn = styled(SubmitBtn)<{ isActive: boolean }>`
  margin-bottom: 50px;
`;

export const SignUpImgUploader = styled.div`
  position: relative;
  margin: auto;
  align-self: center;
  margin-bottom: 30px;
`;

export const ProfileThumbNail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: ${props => props.theme.mainGrey};
  svg {
    font-size: 70px;
    color: white;
  }
`;

export const ProfileThumbNailImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

export const ProfileImgSelect = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
  svg {
    font-size: 42px;
    color: ${props => props.theme.mainRed};
  }
`;

export const SignUpImgInput = styled.input`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 44px;
  transform: scale(2.1);
  line-height: 40px;
  opacity: 0;
`;
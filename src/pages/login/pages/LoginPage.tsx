import React from 'react';
import {
  LoginMainDiv,
  LoginMarginTopTitle,
  LoginSubTitle,
  LoginButton,
  SignUpButton,
  LoginDivs,
} from 'pages/login/styles/LoginPageStyles';
import ProgressBar from 'components/progressBar/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {
  return (
    <LoginMainDiv>
      <LoginMarginTopTitle marginTop={8}>룸 메이트</LoginMarginTopTitle>
      <LoginSubTitle>
        룸메이트를 찾아보세용.
        <br />
        신나고 좋아요.
        <br />
        내가 원하던 룸메를 찾아보세요.
      </LoginSubTitle>
      <LoginDivs>
        <LoginButton types={'kakao'}>카카오톡 로그인</LoginButton>
        <LoginButton types={'naver'}>네이버 로그인</LoginButton>
        <LoginButton types={'email'}>
          <FontAwesomeIcon icon={faEnvelope} color={'#000000'} />
          <span style={{ margin: '0 auto' }}>이메일로 로그인</span>
        </LoginButton>
      </LoginDivs>
      <SignUpButton>여기를 눌러 회원가입하기</SignUpButton>
      <ProgressBar width={30} />
    </LoginMainDiv>
  );
}

export default LoginPage;

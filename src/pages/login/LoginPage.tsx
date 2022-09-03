import React from 'react';
import {
  LoginMarginTopTitle,
  SignUpButton,
  LoginIcon,
} from 'design/loginStyles/LoginPageStyles';
import ProgressBar from 'components/progressBar/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PageContainer } from 'design/commonStyles';
import {
  SocialSignUpBtn,
  EmailSignUpBtn,
  BtnBox,
} from 'design/signupStyles/SignUpStyle';
import kakaoImg from 'assets/kakaoImg.png';
import naverImg from 'assets/naverImg.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <PageContainer>
      <LoginMarginTopTitle>
        룸 메이트
        <div>
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
        </div>
      </LoginMarginTopTitle>
      <BtnBox>
        <SocialSignUpBtn types={'kakao'}>
          <img src={kakaoImg} />
          카카오톡 로그인
        </SocialSignUpBtn>
        <SocialSignUpBtn types={'naver'}>
          <img src={naverImg} />
          네이버로 로그인
        </SocialSignUpBtn>
        <Link to={'/login/email'}>
          <EmailSignUpBtn>
            <LoginIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </LoginIcon>
            <span style={{ margin: '0 auto' }}>이메일로 로그인</span>
          </EmailSignUpBtn>
        </Link>
      </BtnBox>
      <Link to={'/sign-up'}>
        <SignUpButton>여기를 눌러 회원가입하기</SignUpButton>
      </Link>
      <ProgressBar width={30} />
    </PageContainer>
  );
}

export default LoginPage;

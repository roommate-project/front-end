import React from 'react';
import { SignUpButton, LoginIcon } from 'design/loginStyles/LoginPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BtnBox, Title } from 'design/commonStyles';
import {
  EmailSignUpBtn,
  SignUpPageContainer,
} from 'design/signupStyles/SignUpStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';

function LoginPage() {
  return (
    <SignUpPageContainer>
      <Title>
        <RoommateLogo height={48} />
        <p>
          룸메이트와 다툼은 이제 그만! 🙅🏻‍♀️ <br />
          <span>성향 기반 매칭 서비스 룸메이트</span>에서 <br />
          나와 꼭 맞는 룸메이트를 찾아보세요!
        </p>
      </Title>
      <BtnBox>
        <Link to={'/login/email'}>
          <EmailSignUpBtn>
            <LoginIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </LoginIcon>
            <span style={{ margin: '0 auto' }}>이메일로 로그인</span>
          </EmailSignUpBtn>
        </Link>
      </BtnBox>
      <SignUpButton>
        <Link to={'/sign-up'}>여기를 눌러 회원가입하기</Link>
      </SignUpButton>
    </SignUpPageContainer>
  );
}

export default LoginPage;

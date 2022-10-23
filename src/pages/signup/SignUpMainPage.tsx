import {
  EmailSignUpBtn,
  SignUpPageContainer,
} from 'design/signupStyles/SignUpStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { BtnBox, Title } from 'design/commonStyles';
import { LoginIcon } from 'design/loginStyles/LoginPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SignUpMainPage() {
  return (
    <SignUpPageContainer>
      <Title>
        <RoommateLogo height={44} />
        <p>
          룸메이트와 다툼은 이제 그만! 🙅🏻‍♀️ <br />
          <span>성향 기반 매칭 서비스 룸메이트</span>에서 <br />
          나와 꼭 맞는 룸메이트를 찾아보세요!
        </p>
      </Title>
      <BtnBox>
        <Link to="/sign-up/email">
          <EmailSignUpBtn>
            <LoginIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </LoginIcon>
            <span style={{ margin: '0 auto' }}>이메일로 가입하기</span>
          </EmailSignUpBtn>
        </Link>
      </BtnBox>
    </SignUpPageContainer>
  );
}

export default SignUpMainPage;

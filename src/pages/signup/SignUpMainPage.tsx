import kakaoImg from 'assets/kakaoImg.png';
import naverImg from 'assets/naverImg.png';
import {
  BtnBox,
  PageContainer,
  EmailSignUpBtn,
  Title,
  SocialSignUpBtn,
} from 'design/signupStyles/SignUpStyle';
import { Link } from 'react-router-dom';

function SignUpMainPage() {
  return (
    <PageContainer>
      <Title>
        ROOMMATE
        <p>
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
        </p>
      </Title>
      <BtnBox>
        <SocialSignUpBtn types="kakao">
          <img src={kakaoImg} />
          카카오로 시작하기
        </SocialSignUpBtn>
        <SocialSignUpBtn types="naver">
          <img src={naverImg} />
          네이버로 시작하기
        </SocialSignUpBtn>
        <Link to="/sign-up/email">
          <EmailSignUpBtn>이메일로 가입하기</EmailSignUpBtn>
        </Link>
      </BtnBox>
    </PageContainer>
  );
}

export default SignUpMainPage;

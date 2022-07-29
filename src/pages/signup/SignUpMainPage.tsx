import kakaoImg from 'assets/kakaoImg.png';
import naverImg from 'assets/naverImg.png';
import {
  BtnBox,
  PageContainer,
  EmailSignUpBtn,
  Title,
  SocialSignUpBtn,
} from 'pages/signup/SignUpStyle';

function SignUpMain() {
  return (
    <PageContainer>
      <Title>
        ROOMMATE
        <div>
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
        </div>
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
        <EmailSignUpBtn>이메일로 가입하기</EmailSignUpBtn>
      </BtnBox>
    </PageContainer>
  );
}

export default SignUpMain;

import kakao from 'assets/kakao.png';
import naver from 'assets/naver.png';
import {
  Box,
  Container,
  EmailSingupBtn,
  KakaoSingupBtn,
  NaverSingupBtn,
  Title,
} from 'pages/signup/SignUpStyle';

function SignUpMain() {
  return (
    <Container>
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
      <Box>
        <KakaoSingupBtn>
          <img src={kakao} />
          카카오로 시작하기
        </KakaoSingupBtn>
        <NaverSingupBtn>
          <img src={naver} />
          네이버로 시작하기
        </NaverSingupBtn>
        <EmailSingupBtn>이메일로 가입하기</EmailSingupBtn>
      </Box>
    </Container>
  );
}

export default SignUpMain;

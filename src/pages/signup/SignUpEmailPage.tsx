import {
  Box,
  Container,
  Input,
  NextBtn,
  Title,
} from 'pages/signup/SignUpStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function SignUpEmail() {
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
        <Input></Input>
        <Input></Input>
      </Box>
      <NextBtn>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </NextBtn>
    </Container>
  );
}

export default SignUpEmail;

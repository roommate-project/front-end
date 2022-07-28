import {
  Container,
  Form,
  Input,
  SendBtn,
  Title,
} from 'pages/signup/SignUpStyle';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValue = {
  email: string;
};

function SignUpEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValue>();
  //email input => active
  const [isActive, setIsActive] = useState(false);
  //watch()는 함수가 종료되고 재렌더링 되기 때문에 event를 통해 input변화를 체크
  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value ? setIsActive(true) : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onValid: SubmitHandler<FormValue> = data => {
    //이메일 중복검사 api
    console.log(data);
    //중복된 이메일이면  -> alert, 오류메세지
    //유효한 이메일이면 -> 인증번호 전송 api -> 다음페이지로
  };
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
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register('email', {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
          onChange={event => onChangeEmail(event)}
        />
        <span>{errors?.email?.message}</span>
        <SendBtn isActive={isActive}>인증번호 전송</SendBtn>
      </Form>
    </Container>
  );
}

export default SignUpEmail;

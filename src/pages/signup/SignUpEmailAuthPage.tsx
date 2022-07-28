import AuthTimer, { TimerContainer } from 'components/signup/AuthTimer';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  AuthBtn,
  Container,
  Form,
  Input,
  ReSendBtn,
  Title,
} from './SignUpStyle';

type FormValue = {
  emailAuth: number;
};

function SignUpEmailAuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValue>();
  const [isActive, setIsActive] = useState(false);
  const onValid: SubmitHandler<FormValue> = data => {
    console.log(data);
  };
  const onChangeAuthNum = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value ? setIsActive(true) : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onClickResend = () => {
    //인증번호 전송 api
    //timer reset
    console.log('인증번호 재전송!');
  };
  return (
    <Container>
      <Title>
        ROOMMATE
        <div>"입력한이메일"로 인증번호를 전송하였습니다. </div>
      </Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <TimerContainer>
          <Input
            type="text"
            {...register('emailAuth', {
              required: true,
              valueAsNumber: true,
              validate: {
                value: value =>
                  value.toString().length !== 6
                    ? '인증번호 형식이 올바르지 않습니다.'
                    : undefined,
              },
            })}
            onChange={event => onChangeAuthNum(event)}
          />
          <AuthTimer />
        </TimerContainer>
        <span>{errors?.emailAuth?.message}</span>
        <ReSendBtn onClick={onClickResend}>인증번호 재전송</ReSendBtn>
        <AuthBtn isActive={isActive}>인증하기</AuthBtn>
      </Form>
    </Container>
  );
}

export default SignUpEmailAuthPage;

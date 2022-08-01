import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  EmailAuthSubmiBtn,
  PageContainer,
  SignUpForm,
  SignUpInput,
  EmailReSendBtn,
  Title,
} from 'design/signupStyles/SignUpStyle';
import AuthTimer from 'components/authTimer/AuthTimer';
import { TimerContainer } from 'components/authTimer/AuthTimerStyles';
import ProgressBar from 'components/progressBar/ProgressBar';

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
    !event.currentTarget.value && clearErrors();
  };
  const onClickResend = () => {};
  return (
    <PageContainer>
      <Title>
        ROOMMATE
        <div>"입력한이메일"로 인증번호를 전송하였습니다. </div>
      </Title>
      <SignUpForm onSubmit={handleSubmit(onValid)}>
        <TimerContainer>
          <SignUpInput
            type="text"
            {...register('emailAuth', {
              required: true,
              valueAsNumber: true,
              validate: {
                value: value =>
                  value.toString().length !== 6 &&
                  '인증번호 형식이 올바르지 않습니다.',
              },
            })}
            onChange={event => onChangeAuthNum(event)}
          />
          <AuthTimer />
        </TimerContainer>
        <span>{errors?.emailAuth?.message}</span>
        <EmailReSendBtn onClick={onClickResend}>인증번호 재전송</EmailReSendBtn>
        <EmailAuthSubmiBtn isActive={isActive}>인증하기</EmailAuthSubmiBtn>
      </SignUpForm>
      <ProgressBar width={66} />
    </PageContainer>
  );
}

export default SignUpEmailAuthPage;

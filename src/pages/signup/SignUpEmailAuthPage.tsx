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
import { useMutation } from '@tanstack/react-query';
import { fetchAuthNumValidation } from 'api/api';
import { useNavigate } from 'react-router-dom';

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
  const mutation = useMutation(fetchAuthNumValidation);
  const navigation = useNavigate();
  const savedEmail = sessionStorage.getItem('email');
  const [isActive, setIsActive] = useState(false);

  const onValid: SubmitHandler<FormValue> = data => {
    mutation.mutateAsync(data).then(res => {
      if (res.data.code === 200) {
        alert('인증이 완료되었습니다.');
        navigation('/sign-up/last');
      } else {
        alert(res.data.message);
      }
    });
  };

  const onChangeAuthNum = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value ? setIsActive(true) : setIsActive(false);
    !event.currentTarget.value && clearErrors();
  };

  const onClickResend = () => {
    location.reload();
  };

  return (
    <PageContainer>
      <Title>
        ROOMMATE
        <div>{savedEmail}로 인증번호를 전송하였습니다. </div>
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

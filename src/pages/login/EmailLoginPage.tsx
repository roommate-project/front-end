import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  LoginInput,
  LoginDiv,
  LoginSubmitButton,
  LoginLabel,
  LoginForm,
  LoginErrorMessage,
} from 'design/loginStyles/EmailLoginPageStyles';
import ProgressBar from 'components/progressBar/ProgressBar';
import { PageContainer } from 'design/commonStyles';
import { LoginMarginTopTitle } from 'design/loginStyles/LoginPageStyles';
import { useMutation } from '@tanstack/react-query';
import { fetchEmailLogin } from 'api/api';
import { useNavigate } from 'react-router-dom';

type FormValue = {
  email: string;
  password: string;
};

function EmailLoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<FormValue>({ mode: 'onBlur' });

  const mutation = useMutation(fetchEmailLogin, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        let token = data.message.split(' ')[0];
        console.log(token);
        sessionStorage.setItem('token', token);
        navigation('/');
      }
    },
  });

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigate();

  const isEmailOn = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value && watch('email').length !== 0
      ? setIsEmail(true)
      : setIsEmail(false);
    isActiveOn();
  };

  const isPasswordOn = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value && watch('password').length !== 0
      ? setIsPassword(true)
      : setIsPassword(false);
    isActiveOn();
  };

  const isActiveOn = () => {
    isEmail && isPassword ? setIsActive(true) : setIsActive(false);
  };

  const onValid: SubmitHandler<FormValue> = data => {
    mutation.mutate(data);
  };

  return (
    <PageContainer>
      <LoginMarginTopTitle>
        ROOM-MATE
        <div>
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
        </div>
      </LoginMarginTopTitle>

      <LoginForm style={{ width: '95%' }} onSubmit={handleSubmit(onValid)}>
        <LoginLabel>이메일</LoginLabel>
        <LoginDiv>
          <LoginInput
            id="email"
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
            onChange={isEmailOn}
          />
        </LoginDiv>
        <LoginErrorMessage>{errors?.email?.message}</LoginErrorMessage>
        <LoginLabel>비밀번호</LoginLabel>
        <LoginDiv>
          <LoginInput
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                message:
                  '비밀번호는 영문과 숫자를 합쳐 8글자 이상 입력해주세요.',
              },
            })}
            onChange={isPasswordOn}
          />
        </LoginDiv>
        <LoginErrorMessage>{errors?.password?.message}</LoginErrorMessage>
        <LoginSubmitButton
          type="submit"
          disabled={isSubmitting}
          isActive={isActive}
        >
          로그인
        </LoginSubmitButton>
      </LoginForm>
      <ProgressBar width={50} />
    </PageContainer>
  );
}

export default EmailLoginPage;

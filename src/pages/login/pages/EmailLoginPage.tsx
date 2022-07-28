import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {
  LoginInput,
  LoginDiv,
  LoginCheckButton,
} from 'pages/login/styles/EmailLoginPageStyles';
import ProgressBar from 'components/progressBar/ProgressBar';

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

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isEmailOn = () => {
    watch('email').length !== 0 ? setIsEmail(true) : setIsEmail(false);
    isActiveOn();
  };

  const isPasswordOn = () => {
    watch('password').length !== 0 ? setIsPassword(true) : setIsPassword(false);
    isActiveOn();
  };

  const isActiveOn = () => {
    isEmail && isPassword ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    isEmailOn();
    isPasswordOn();
    isActiveOn();
  }, [watch('email'), watch('password')]);

  return (
    <>
      <form
        onSubmit={handleSubmit(async data => {
          await new Promise(r => setTimeout(r, 1000));
          alert(JSON.stringify(data));
        })}
      >
        <label htmlFor="email">이메일</label>
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

          <LoginCheckButton
            icon={faCircleCheck}
            color={isEmail && !errors?.email?.type ? '#000000' : '#ffffff'}
          />
        </LoginDiv>
        <p>{errors?.email?.message}</p>
        <label htmlFor="password">비밀번호</label>
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
          <LoginCheckButton
            icon={faCircleCheck}
            color={isEmail && !errors?.password?.type ? '#000000' : '#ffffff'}
          />
        </LoginDiv>
        <p>{errors?.password?.message}</p>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ backgroundColor: isActive ? '#ff0000' : '#ffffff' }}
        >
          로그인
        </button>
      </form>
      <ProgressBar width={50} />
    </>
  );
}

export default EmailLoginPage;

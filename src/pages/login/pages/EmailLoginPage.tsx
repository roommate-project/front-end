import React from 'react';
import { useForm } from 'react-hook-form';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCircleCheckSolid } from '@fortawesome/free-regular-svg-icons';
import {
  LoginInput,
  LoginDiv,
  LoginCheckButton,
} from 'pages/login/styles/EmailLoginPageStyles';
import ProgressBar from 'components/progressBar/ProgressBar';

function EmailLoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: 'onBlur' });

  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

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

  React.useEffect(() => {
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
              pattern:
                /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
            })}
            onChange={isEmailOn}
          />

          <LoginCheckButton
            icon={
              isEmail && !errors?.email?.type
                ? faCircleCheck
                : faCircleCheckSolid
            }
          />
        </LoginDiv>
        <p>{errors?.email?.type && '이메일을 입력해주세요.'}</p>
        <label htmlFor="password">비밀번호</label>
        <LoginDiv>
          <LoginInput
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
            })}
            onChange={isPasswordOn}
          />
          <LoginCheckButton
            icon={
              isPassword && !errors?.password?.type
                ? faCircleCheck
                : faCircleCheckSolid
            }
          />
        </LoginDiv>
        <p>
          {errors?.password?.type &&
            '비밀번호는 영문자와 숫자를 포함한 8글자 이상압니다.'}
        </p>
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

import React from 'react';
import { useForm } from 'react-hook-form';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCircleCheckSolid } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EmailLoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const isEmailOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value && watch('email') ? setIsEmail(true) : setIsEmail(false);
    isActiveOn(e);
  };

  const isPasswordOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value && watch('password')
      ? setIsPassword(true)
      : setIsPassword(false);
    isActiveOn(e);
  };

  const isActiveOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value && watch('email') && watch('password')
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(async data => {
          await new Promise(r => setTimeout(r, 1000));
          alert(JSON.stringify(data));
        })}
      >
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register('email')}
          onChange={isEmailOn}
        />
        <FontAwesomeIcon icon={isEmail ? faCircleCheck : faCircleCheckSolid} />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register('password')}
          onChange={isPasswordOn}
        />
        <FontAwesomeIcon
          icon={isPassword ? faCircleCheck : faCircleCheckSolid}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ backgroundColor: isActive ? '#ff0000' : '#ffffff' }}
        >
          로그인
        </button>
      </form>
    </>
  );
}

export default EmailLoginPage;

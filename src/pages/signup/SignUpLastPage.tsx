import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PageContainer, Form, Input, SubmitBtn } from './SignUpStyle';

type FormValue = {
  name: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  representImage: File;
  /* images: File; // 추가사진 */
};

function SignUpLastPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
    watch,
  } = useForm<FormValue>();
  const [isActive, setIsActive] = useState(false);
  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value &&
    watch('nickName') &&
    watch('password') &&
    watch('passwordCheck')
      ? setIsActive(true)
      : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onChangeNickName = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value &&
    watch('name') &&
    watch('password') &&
    watch('passwordCheck')
      ? setIsActive(true)
      : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value &&
    watch('nickName') &&
    watch('name') &&
    watch('passwordCheck')
      ? setIsActive(true)
      : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onChangePasswordCheck = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value &&
    watch('nickName') &&
    watch('password') &&
    watch('name')
      ? setIsActive(true)
      : setIsActive(false);
    event.currentTarget.value ? null : clearErrors();
  };
  const onValid: SubmitHandler<FormValue> = data => {
    if (data.password !== data.passwordCheck) {
      setError(
        'passwordCheck',
        {
          message: '비밀번호 확인이 일치하지 않습니다.',
        },
        { shouldFocus: true }
      );
    }
  };
  return (
    <PageContainer>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          type="file"
          {...register('representImage', {
            required: '프로필 혹은 집 대표 사진은 필수입니다.',
          })}
        />
        <span>{errors.representImage?.message}</span>
        <Input
          type="text"
          {...register('name', {
            required: true,
            minLength: { value: 2, message: '이름을 두글자 이상 입력해주세요' },
          })}
          onChange={onChangeName}
        />
        <span>{errors.name?.message}</span>
        <Input
          type="text"
          {...register('nickName', {
            required: true,
            minLength: {
              value: 2,
              message: '닉네임을 두글자 이상 입력해주세요',
            },
          })}
          onChange={onChangeNickName}
        />
        <span>{errors.nickName?.message}</span>
        <Input
          type="password"
          {...register('password', {
            required: true,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
              message: '비밀번호는 영문, 숫자 포함 8글자 이상입니다. ',
            },
          })}
          onChange={onChangePassword}
        />
        <span>{errors.password?.message}</span>
        <Input
          type="password"
          {...register('passwordCheck', { required: true })}
          onChange={onChangePasswordCheck}
        />
        <span>{errors.passwordCheck?.message}</span>
        <SubmitBtn isActive={isActive}>회원가입</SubmitBtn>
      </Form>
    </PageContainer>
  );
}

export default SignUpLastPage;

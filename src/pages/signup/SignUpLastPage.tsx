import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  PageContainer,
  SignUpForm,
  SignUpInput,
  SignUpBtn,
  ProfileThumbNail,
  SignUpImgUploader,
  ProfileImgSelect,
  SignUpImgInput,
  ProfileThumbNailImg,
} from 'design/signupStyles/SignUpStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'components/progressBar/ProgressBar';

type FormValue = {
  name: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  representImage: FileList;
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
  const [profilePreview, setProfilePreview] = useState('');
  const profileImg = watch('representImage');
  useEffect(() => {
    if (profileImg && profileImg.length > 0) {
      const file = profileImg[0];
      setProfilePreview(URL.createObjectURL(file));
    }
  }, [profileImg]);
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
      <SignUpForm onSubmit={handleSubmit(onValid)}>
        <SignUpImgUploader>
          {profilePreview ? (
            <ProfileThumbNailImg src={profilePreview} />
          ) : (
            <ProfileThumbNail>
              <FontAwesomeIcon icon={faUser} />
            </ProfileThumbNail>
          )}
          <ProfileImgSelect>
            <FontAwesomeIcon icon={faCirclePlus} />
            <SignUpImgInput
              type="file"
              accept="image/*"
              {...register('representImage', {
                required: '프로필 혹은 집 대표 사진은 필수입니다.',
              })}
            />
          </ProfileImgSelect>
        </SignUpImgUploader>
        <span>{errors.representImage?.message}</span>
        <SignUpInput
          type="text"
          {...register('name', {
            required: true,
            minLength: { value: 2, message: '이름을 두글자 이상 입력해주세요' },
          })}
          onChange={onChangeName}
        />
        <span>{errors.name?.message}</span>
        <SignUpInput
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
        <SignUpInput
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
        <SignUpInput
          type="password"
          {...register('passwordCheck', { required: true })}
          onChange={onChangePasswordCheck}
        />
        <span>{errors.passwordCheck?.message}</span>
        <SignUpBtn isActive={isActive}>회원가입</SignUpBtn>
      </SignUpForm>
      <ProgressBar width={100} />
    </PageContainer>
  );
}

export default SignUpLastPage;

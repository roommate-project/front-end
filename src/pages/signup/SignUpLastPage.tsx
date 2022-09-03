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
  LocationSelect,
  GenderRadio,
} from 'design/signupStyles/SignUpStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'components/progressBar/ProgressBar';
import { useMutation } from '@tanstack/react-query';
import { fetchEmailRegister } from 'api/api';
import { useNavigate } from 'react-router-dom';

type FormValue = {
  name: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  representImage: FileList;
  age: string;
  location: string;
  gender: string;
  dormitory: string;
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
  const navegation = useNavigate();
  const locationData = [
    '종로구',
    '중구',
    '용산구',
    '성동구',
    '광진구',
    '동대문구',
    '중랑구',
    '성북구',
    '강북구',
    '도봉구',
    '노원구',
    '은평구',
    '서대문구',
    '마포구',
    '양천구',
    '강서구',
    '구로구',
    '금천구',
    '영등포구',
    '동작구',
    '관악구',
    '서초구',
    '강남구',
    '송파구',
    '강동구',
  ];

  const mutation = useMutation(fetchEmailRegister, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        alert('회원가입이 완료되었습니다.');
        navegation('/');
      } else if (data.code === 400) {
        alert('중복된 이메일 입니다.');
      } else {
        alert('회원가입에 실패하였습니다.');
      }
    },
    onError: error => alert(error),
  });

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
    console.log(data);
    mutation.mutate(data);
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
          placeholder="이름"
        />
        <span>{errors.name?.message}</span>
        <SignUpInput
          type="text"
          {...register('age', {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="나이"
        />
        <span>{errors.age?.message}</span>
        <GenderRadio>
          <input type="radio" id="male" value="male" {...register('gender')} />
          <label htmlFor="male">남자</label>
          <input
            type="radio"
            id="female"
            value="female"
            {...register('gender')}
          />
          <label htmlFor="female">여자</label>
          <input type="radio" id="etc" value="etc" {...register('gender')} />
          <label htmlFor="etc">기타</label>
        </GenderRadio>
        <span>{errors.gender?.message}</span>
        <LocationSelect {...register('location')}>
          {locationData.map((data, index) => (
            <option value={data} key={index}>
              {data}
            </option>
          ))}
        </LocationSelect>
        <SignUpInput
          type="dormitory"
          {...register('dormitory', { required: true })}
          placeholder="ex)숭실대학교"
        />
        <span>{errors.dormitory?.message}</span>
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
          placeholder="닉네임"
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
          placeholder="비밀번호"
        />
        <span>{errors.password?.message}</span>
        <SignUpInput
          type="password"
          {...register('passwordCheck', { required: true })}
          onChange={onChangePasswordCheck}
          placeholder="비밀번호 확인"
        />
        <span>{errors.passwordCheck?.message}</span>
        <SignUpBtn isActive={isActive}>회원가입</SignUpBtn>
      </SignUpForm>
      <ProgressBar width={100} />
    </PageContainer>
  );
}

export default SignUpLastPage;

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
  Title,
  SignUpSection,
} from 'design/signupStyles/SignUpStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'components/progressBar/ProgressBar';
import { useMutation } from '@tanstack/react-query';
import { fetchEmailRegister } from 'api/signUpApi';
import { useNavigate } from 'react-router-dom';
import { locationData } from 'utils/locationData';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';

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
    formState: { errors, isValid },
    watch,
  } = useForm<FormValue>({ mode: 'all' });
  const [formStep, setFormStep] = useState(1);
  const [profilePreview, setProfilePreview] = useState('');
  const profileImg = watch('representImage');
  const navegation = useNavigate();

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

  const nextPage = () => {
    setFormStep(prev => prev + 1);
  };

  const onValid: SubmitHandler<FormValue> = data => {
    mutation.mutate(data);
  };

  return (
    <PageContainer>
      <SignUpForm onSubmit={handleSubmit(onValid)}>
        {formStep === 1 && (
          <SignUpSection>
            <Title>
              <RoommateLogo height={48} />
              <p>
                비밀번호는 영문, 숫자를 포함하여 8글자 이상으로 생성해주세요.
              </p>
            </Title>
            <SignUpInput
              type="password"
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                  message: '비밀번호는 영문, 숫자 포함 8글자 이상입니다. ',
                },
              })}
              placeholder="비밀번호"
            ></SignUpInput>
            <span>{errors.password?.message}</span>
            <SignUpInput
              type="password"
              {...register('passwordCheck', {
                required: true,
                validate: value =>
                  value === watch('password') ||
                  '비밀번호 확인이 일치하지 않습니다.',
              })}
              placeholder="비밀번호 확인"
            />
            <span>{errors.passwordCheck?.message}</span>
          </SignUpSection>
        )}
        {formStep === 2 && (
          <SignUpSection>
            <Title>
              <RoommateLogo height={48} />
              <p>다른 룸메이트들에게 보여질 이름과 닉네임을 입력해주세요!</p>
            </Title>
            <SignUpInput
              type="text"
              {...register('name', {
                required: true,
                minLength: {
                  value: 2,
                  message: '이름을 두글자 이상 입력해주세요',
                },
              })}
              placeholder="이름"
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
              placeholder="닉네임"
            />
            <span>{errors.nickName?.message}</span>
          </SignUpSection>
        )}
        {formStep === 3 && (
          <SignUpSection>
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
              {...register('age', {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="나이"
            />
            <span>{errors.age?.message}</span>
            <GenderRadio>
              <input
                type="radio"
                id="male"
                value="male"
                {...register('gender')}
              />
              <label htmlFor="male">남자</label>
              <input
                type="radio"
                id="female"
                value="female"
                {...register('gender')}
              />
              <label htmlFor="female">여자</label>
              <input
                type="radio"
                id="etc"
                value="etc"
                {...register('gender')}
              />
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
          </SignUpSection>
        )}
        {formStep === 3 ? (
          <SignUpBtn disabled={!isValid}>회원가입</SignUpBtn>
        ) : (
          <SignUpBtn disabled={!isValid} onClick={nextPage}>
            다음
          </SignUpBtn>
        )}
      </SignUpForm>
      {formStep === 1 ? (
        <ProgressBar width={60} />
      ) : formStep === 2 ? (
        <ProgressBar width={80} />
      ) : (
        <ProgressBar width={100} />
      )}
    </PageContainer>
  );
}

export default SignUpLastPage;

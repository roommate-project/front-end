import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  SignUpBtn,
  ProfileThumbNail,
  SignUpImgUploader,
  ProfileImgSelect,
  ProfileThumbNailImg,
  GenderRadio,
  SignUpSection,
  SignUpAgeSelect,
  RadioLabel,
  SignUpPageContainer,
} from 'design/signupStyles/SignUpStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'components/progressBar/ProgressBar';
import { useMutation } from '@tanstack/react-query';
import { fetchEmailRegister } from 'api/signUpApi';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { Form, Input, InputLabel, Title } from 'design/commonStyles';
import { ImgInput } from 'design/commonStyles';
import { fetchEmailLogin } from 'api/loginApi';

interface FormValue {
  name: string;
  nickName: string;
  password: string;
  passwordCheck: string;
  representImage: FileList;
  age: string;
  gender: string;
}

function SignUpLastPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValue>({ mode: 'all' });
  const [formStep, setFormStep] = useState(1);
  const [profilePreview, setProfilePreview] = useState('');
  const [genderRadio, setGenderRadio] = useState('');
  const profileImg = watch('representImage');
  const navegation = useNavigate();

  //자동로그인
  const loginMutation = useMutation(fetchEmailLogin, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        let accessToken = data.message.split(' ')[0];
        let refreshToken = data.message.split(' ')[1];
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('userId', data.id);
        navegation('/register-house-info');
      }
    },
  });

  const mutation = useMutation(fetchEmailRegister, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        const loginData = {
          email: sessionStorage.getItem('email'),
          password: sessionStorage.getItem('password'),
        };
        loginMutation.mutate(loginData);
        alert(
          '회원가입이 완료되었습니다. 원활한 서비스 이용을 위해 추가정보를 입력해주세요.'
        );
      } else if (data.code === 400) {
        alert('중복된 이메일 입니다.');
      } else if (data.code === 401) {
        alert(data.message);
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

  const AgeArray = [...new Array(81)].map((_, i) => 19 + i);

  const genderRaioToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderRadio(event.target.value);
  };

  const onValid: SubmitHandler<FormValue> = data => {
    console.log(data);
    sessionStorage.setItem('password', data.password);
    mutation.mutate(data);
  };

  return (
    <SignUpPageContainer>
      {formStep === 1 ? (
        <Title>
          <RoommateLogo height={44} />
          <p>비밀번호는 영문, 숫자를 포함하여 8글자 이상으로 생성해주세요.</p>
        </Title>
      ) : formStep === 2 ? (
        <Title>
          <RoommateLogo height={44} />
          <p>다른 룸메이트들에게 보여질 이름과 닉네임을 입력해주세요!</p>
        </Title>
      ) : null}
      <Form onSubmit={handleSubmit(onValid)}>
        {formStep === 1 && (
          <SignUpSection>
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                  message: '비밀번호는 영문, 숫자 포함 8글자 이상입니다. ',
                },
              })}
              placeholder="비밀번호"
            />
            <span>{errors.password?.message}</span>
            <InputLabel htmlFor="passwordCheck">비밀번호 확인</InputLabel>
            <Input
              id="passwordCheck"
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
            <InputLabel htmlFor="name">이름</InputLabel>
            <Input
              id="name"
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
            <InputLabel htmlFor="nickName">닉네임</InputLabel>
            <Input
              id="nickName"
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
                <ImgInput
                  type="file"
                  accept="image/*"
                  {...register('representImage', {
                    required: '프로필 혹은 집 대표 사진은 필수입니다.',
                  })}
                />
              </ProfileImgSelect>
            </SignUpImgUploader>
            <span>{errors.representImage?.message}</span>
            <InputLabel htmlFor="age">나이</InputLabel>
            <SignUpAgeSelect
              id="age"
              {...register('age', { required: true })}
              defaultValue={''}
            >
              <option value="" disabled hidden>
                나이를 선택하세요
              </option>
              {AgeArray.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </SignUpAgeSelect>
            <InputLabel htmlFor="gender">성별</InputLabel>
            <GenderRadio id="gender">
              <RadioLabel
                htmlFor="male"
                checked={genderRadio === 'male' ? true : false}
              >
                남자
                <input
                  type="radio"
                  id="male"
                  value="male"
                  {...register('gender')}
                  onChange={event => genderRaioToggle(event)}
                />
              </RadioLabel>
              <RadioLabel
                htmlFor="female"
                checked={genderRadio === 'female' ? true : false}
              >
                여자
                <input
                  type="radio"
                  id="female"
                  value="female"
                  {...register('gender', { required: true })}
                  onChange={event => genderRaioToggle(event)}
                />
              </RadioLabel>
            </GenderRadio>
          </SignUpSection>
        )}
        {formStep === 3 ? (
          <SignUpBtn disabled={!isValid}>회원가입</SignUpBtn>
        ) : (
          <SignUpBtn disabled={!isValid} onClick={nextPage}>
            다음
          </SignUpBtn>
        )}
      </Form>
      {formStep === 1 ? (
        <ProgressBar width={60} />
      ) : formStep === 2 ? (
        <ProgressBar width={80} />
      ) : (
        <ProgressBar width={100} />
      )}
    </SignUpPageContainer>
  );
}

export default SignUpLastPage;

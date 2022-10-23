import React, { useState } from 'react';
import { MyIntroduceOptionBox } from 'design/myPageStyles/myIntroduceSelfStyles';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFirstRegisterHouseInfo } from 'api/mypageApi';
import {
  LocationSelect,
  SignUpPageContainer,
  SignUpSection,
  SignUpBtn,
} from 'design/signupStyles/SignUpStyle';
import { Form, Input, InputLabel, Title } from 'design/commonStyles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { locationData } from 'utils/locationData';

const roomCount: Array<String> = ['기숙사', '1개', '2개', '3개', '3개 이상'];
const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);
const period = [...new Array(14)].map((_, i) => i);

export interface FormValue {
  cost: string;
  experience: string;
  houseInfo: string;
  info: string;
  room: string;
  want_long: string;
  location: string;
  dormitory: string;
}

function RegisterInfoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: 'all' });
  const navigation = useNavigate();
  const [formStep, setFormStep] = useState(1);

  const mutation = useMutation(postFirstRegisterHouseInfo, {
    onSuccess({ data }) {
      if (data.code == 200) {
        alert('집 정보 등록 완료. 주거 성향테스트를 완료해주세요.');
        navigation('/residential-test');
      } else if (data.code == 409) {
        alert(
          '주거정보가 이미 저장되어있습니다. 변경을 원하시면 마이페이지에서 수정할 수 있습니다.'
        );
      } else {
        alert(data.error);
      }
    },
  });

  const nextPage = () => {
    setFormStep(prev => prev + 1);
  };

  const onValid: SubmitHandler<FormValue> = data => {
    mutation.mutate(data);
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
  };

  return (
    <SignUpPageContainer>
      {formStep === 1 ? (
        <Title>
          <RoommateLogo height={44} />
          <p>동거 경험과 희망 거주기간을 알려주세요!</p>
        </Title>
      ) : formStep === 2 ? (
        <Title>
          <RoommateLogo height={44} />
          <p>룸메이트와 함께 살 우리집을 소개해주세요!</p>
        </Title>
      ) : (
        <Title>
          <RoommateLogo height={44} />
          <p>나는 어떤 사람인지 짧은 소갯말을 남겨주세요!</p>
        </Title>
      )}

      <Form onSubmit={handleSubmit(onValid)}>
        {formStep === 1 && (
          <SignUpSection>
            <InputLabel htmlFor="period">거주 경험 기간</InputLabel>
            <LocationSelect
              id="experience"
              {...register('experience', {
                required: true,
              })}
              defaultValue={''}
            >
              <option value="" disabled hidden>
                공동생활 경험 기간을 선택해주세요.
              </option>
              {period.map((period, index) => (
                <MyIntroduceOptionBox value={period} key={index}>
                  {period < 13 ? `${period}개월` : '1년 이상'}
                </MyIntroduceOptionBox>
              ))}
            </LocationSelect>
            <InputLabel htmlFor="want_long">원하는 거주 기간</InputLabel>
            <LocationSelect
              id="want_long"
              {...register('want_long', { required: true })}
              defaultValue={''}
            >
              <option value="" disabled hidden>
                희망 거주 기간을 선택해주세요.
              </option>
              {period.map((period, index) => (
                <MyIntroduceOptionBox value={period} key={index}>
                  {period < 13 ? `${period}개월` : '1년 이상'}
                </MyIntroduceOptionBox>
              ))}
            </LocationSelect>
          </SignUpSection>
        )}

        {formStep === 2 && (
          <SignUpSection>
            <InputLabel htmlFor="location">지역</InputLabel>
            <LocationSelect
              id="location"
              {...register('location', { required: true })}
              defaultValue={''}
            >
              <option value="" disabled hidden>
                지역을 선택하세요
              </option>
              {locationData.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </LocationSelect>
            <InputLabel htmlFor="dormitory">기숙사</InputLabel>
            <Input
              id="dormitory"
              type="dormitory"
              {...register('dormitory', { required: true })}
              placeholder="ex)숭실대학교 or 자취"
            />
            <InputLabel htmlFor="room">방 개수</InputLabel>
            <LocationSelect
              id="room"
              {...register('room', { required: true })}
              defaultValue=""
            >
              <option value="" disabled hidden>
                방 개수 혹은 기숙사 여부를 선택해주세요.
              </option>
              {roomCount.map((roomCount, index) => (
                <MyIntroduceOptionBox value={index}>
                  {roomCount}
                </MyIntroduceOptionBox>
              ))}
            </LocationSelect>
            <InputLabel htmlFor="cost">월세</InputLabel>
            <LocationSelect
              id="cost"
              {...register('cost', { required: true })}
              defaultValue=""
            >
              <option value="" disabled hidden>
                상대방이 부담해야할 월세를 설정해주세요.
              </option>
              {costRange.map(costRange => (
                <MyIntroduceOptionBox value={costRange * 10000} key={costRange}>
                  {costRange < 100000000 ? `${costRange} 만원` : '100만원 이상'}
                </MyIntroduceOptionBox>
              ))}
            </LocationSelect>
            <InputLabel htmlFor="houseInfo">집 소개</InputLabel>
            <Input
              id="houseInfo"
              {...register('houseInfo', {
                required: '짧게라도 집소개를 입력해주세요!',
              })}
            />
            <span>{errors.houseInfo?.message}</span>
          </SignUpSection>
        )}

        {formStep === 3 && (
          <SignUpSection>
            <InputLabel htmlFor="info">내 소개</InputLabel>
            <Input
              id="info"
              {...register('info', {
                required: '한줄 자기소개를 입력해주세요!',
                maxLength: {
                  value: 50,
                  message: '50자 미만의 한줄 소개를 남겨주세요😝',
                },
              })}
            />
            <span>{errors.info?.message}</span>
          </SignUpSection>
        )}

        {formStep === 3 ? (
          <SignUpBtn disabled={!isValid}>설정 완료</SignUpBtn>
        ) : (
          <SignUpBtn disabled={!isValid} onClick={nextPage}>
            다음
          </SignUpBtn>
        )}
      </Form>
    </SignUpPageContainer>
  );
}

export default RegisterInfoPage;

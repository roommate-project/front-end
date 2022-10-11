import React, { useState } from 'react';
import { MyIntroduceOptionBox } from 'design/myPageStyles/myIntroduceSelfStyles';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFirstRegisterHouseInfo } from '../../api/mypageApi';
import {
  Title,
  LocationSelect,
  SignUpInput,
  EmailSignUpBtn,
} from 'design/signupStyles/SignUpStyle';
import { PageContainer } from 'design/commonStyles';

const roomCount: Array<String> = ['기숙사', '1개', '2개', '3개', '3개 이상'];
const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);
const period = [...new Array(14)].map((_, i) => i);

function RegisterInfoPage() {
  const [houseInfo, setHouseInfo] = useState<object>();
  const mutation = useMutation(postFirstRegisterHouseInfo, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('집 정보 등록 완료. 주거 성향테스트를 완료해주세요.');
      } else {
        alert(data.error);
      }
    },
  });
  const saveHouseInfo = () => {
    mutation.mutate(houseInfo ?? {});
  };
  const onChangeDatas = (e: any) => {
    setHouseInfo({
      ...houseInfo,
      [e.target.name]: e.target.value.toString(),
    });
  };

  return (
    <PageContainer>
      <div style={{ marginTop: '40px' }}></div>
      <Title>
        <p>거주 경험 기간</p>
      </Title>

      <LocationSelect
        name="experience"
        id="period"
        onChange={e => {
          onChangeDatas(e);
        }}
        defaultValue={'1개월'}
      >
        {period.map(period => (
          <MyIntroduceOptionBox value={period}>
            {period < 13 ? `${period}개월` : '1년 이상'}
          </MyIntroduceOptionBox>
        ))}
      </LocationSelect>

      <Title>
        <p>원하는 거주 기간</p>
      </Title>

      <LocationSelect
        name="want_long"
        id="period"
        onChange={e => {
          onChangeDatas(e);
        }}
        defaultValue={'1개월'}
      >
        {period.map(period => (
          <MyIntroduceOptionBox value={period}>
            {period < 13 ? `${period}개월` : '1년 이상'}
          </MyIntroduceOptionBox>
        ))}
      </LocationSelect>

      <Title>
        <p>내 소개</p>
      </Title>
      <SignUpInput
        name="info"
        id="myInfo"
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      />

      <Title>
        <p>방 개수</p>
      </Title>
      <LocationSelect
        name="room"
        defaultValue={1}
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      >
        {roomCount.map((roomCount, index) => (
          <MyIntroduceOptionBox value={index}>{roomCount}</MyIntroduceOptionBox>
        ))}{' '}
      </LocationSelect>
      <Title>
        <p>월세</p>
      </Title>
      <LocationSelect
        name="cost"
        defaultValue={'100000'}
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      >
        {costRange.map(costRange => (
          <MyIntroduceOptionBox value={costRange * 10000} key={costRange}>
            {costRange < 100000000 ? `${costRange} 만원` : '100만원 이상'}
          </MyIntroduceOptionBox>
        ))}{' '}
      </LocationSelect>
      <Title>
        <p>집 소개</p>
      </Title>
      <SignUpInput
        name="houseInfo"
        id="houseInfo"
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      />

      <Link
        to={'/residential-test'}
        onClick={() => {
          saveHouseInfo();
        }}
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <EmailSignUpBtn>설정 완료</EmailSignUpBtn>
      </Link>
    </PageContainer>
  );
}

export default RegisterInfoPage;

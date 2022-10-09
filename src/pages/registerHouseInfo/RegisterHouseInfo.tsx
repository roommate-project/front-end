import React, { useState } from 'react';
import {
  MyIntroduceContentTitle,
  MyIntroduceOptionBox,
  MyIntroduceSelectBox,
  MyIntroduceTextArea,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import { PageContainer } from '../../design/signupStyles/SignUpStyle';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFirstRegisterHouseInfo } from '../../api/mypageApi';

const roomCount: Array<String> = ['기숙사', '1개', '2개', '3개', '3개 이상'];
const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);

function RegisterHousInfoPage() {
  const [houseInfo, setHouseInfo] = useState({});
  const mutation = useMutation(postFirstRegisterHouseInfo, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('대표 사진 수정 완료');
      } else {
        alert(data.error);
      }
    },
  });
  const saveHouseInfo = () => {
    mutation.mutate(houseInfo);
  };
  const onChangeDatas = (e: any) => {
    setHouseInfo({
      ...houseInfo,
      [e.target.name]: e.target.value.toString(),
    });
  };

  return (
    <PageContainer>
      <MyIntroduceContentTitle>방 개수</MyIntroduceContentTitle>
      <MyIntroduceSelectBox
        name="room"
        defaultValue={1}
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      >
        {roomCount.map((roomCount, index) => (
          <MyIntroduceOptionBox value={index}>{roomCount}</MyIntroduceOptionBox>
        ))}{' '}
      </MyIntroduceSelectBox>
      <MyIntroduceContentTitle>월세</MyIntroduceContentTitle>
      <MyIntroduceSelectBox
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
      </MyIntroduceSelectBox>
      <MyIntroduceContentTitle>집 소개</MyIntroduceContentTitle>
      <MyIntroduceTextArea
        name="houseInfo"
        id="houseInfo"
        onChange={(e: any) => {
          onChangeDatas(e);
        }}
      />
      <Link
        to={'/'}
        onClick={() => {
          saveHouseInfo();
        }}
      >
        설정 완료
      </Link>
    </PageContainer>
  );
}

export default RegisterHousInfoPage;

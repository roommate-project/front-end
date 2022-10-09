import React from 'react';
import {
  MyIntroduceContentTitle,
  MyIntroduceOptionBox,
  MyIntroducePutButton,
  MyIntroduceSelectBox,
  MyIntroduceTextArea,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { PageContainer } from '../../design/signupStyles/SignUpStyle';

const roomCount: Array<String> = ['기숙사', '1개', '2개', '3개', '3개 이상'];
const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);

function RegisterHousInfoPage() {
  return (
    <PageContainer>
      <MyIntroduceContentTitle>방 개수</MyIntroduceContentTitle>
      <MyIntroduceSelectBox name="roomCount" defaultValue={1}>
        {roomCount.map((roomCount, index) => (
          <MyIntroduceOptionBox value={index}>{roomCount}</MyIntroduceOptionBox>
        ))}{' '}
      </MyIntroduceSelectBox>
      <MyIntroduceContentTitle>월세</MyIntroduceContentTitle>
      <MyIntroduceSelectBox name="cost" defaultValue={'100000'}>
        {costRange.map(costRange => (
          <MyIntroduceOptionBox value={costRange * 10000} key={costRange}>
            {costRange < 100000000 ? `${costRange} 만원` : '100만원 이상'}
          </MyIntroduceOptionBox>
        ))}{' '}
      </MyIntroduceSelectBox>
      <MyIntroduceContentTitle>집 사진</MyIntroduceContentTitle>
      <label htmlFor="housePhohtos">
        <MyIntroducePutButton icon={faCirclePlus} />
      </label>
      <input
        type="file"
        name="housePhohtos"
        id="housePhohtos"
        style={{
          width: 0,
          height: 0,
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          border: 0,
        }}
        accept="image/jpg,image/png,image/jpeg,image/gif"
      />
      <MyIntroduceContentTitle>집 소개</MyIntroduceContentTitle>
      <MyIntroduceTextArea name="houseInfo" id="houseInfo" />
    </PageContainer>
  );
}

export default RegisterHousInfoPage;

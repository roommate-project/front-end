import React, { useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  DetailTabButton,
  DetailTabButtonDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import UserIntroduction from 'components/mathingDetail/UserIntroduction';
import HouseIntroduction from 'components/mathingDetail/HouseIntroduction';
import DetailPhotos from 'components/mathingDetail/DetailPhotos';

const userTestResult = [true, true, false, true, false, false];

const selfIntroduction = {
  userBasicInfo: {
    name: '김원희',
    nickname: '워니',
    age: 26,
    address: '마포구',
    sex: '여자',
    experience: 120,
  },
  desiredResidencePeriod: 180,
  userMessage:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe dolorum excepturi aperiam ad id esse at fugit quos eius! Et labore ipsum, quo earum quae pariatur nesciunt iste assumenda?',
  testResult: [true, false, false, false, true, true],
};

const houseIntroduction = {
  roomCount: 3,
  costType: '월세',
  cost: 380000,
  houseMessage:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure minus, ipsam excepturi repudiandae delectus nesciunt optio. Error, modi earum fuga enim in rerum, maiores quod natus est, officia quisquam.',
};

function MatchingDetailPage() {
  const [introductionType, setIntroductionType] = useState(true);

  const setTypePerson = () => {
    return setIntroductionType(true);
  };

  const setTypeHouse = () => {
    return setIntroductionType(false);
  };

  return (
    <PageContainer>
      <DetailPhotos
        userBasicInfo={selfIntroduction.userBasicInfo}
        matchingRate={80}
        photoUrls={['dd']}
      />

      <DetailTabButtonDiv>
        <DetailTabButton isTap={introductionType} onClick={setTypePerson}>
          유저 소개
        </DetailTabButton>
        <DetailTabButton isTap={!introductionType} onClick={setTypeHouse}>
          집 소개
        </DetailTabButton>
      </DetailTabButtonDiv>

      {introductionType && (
        <UserIntroduction
          selfIntroduction={selfIntroduction}
          userTestResult={userTestResult}
          roomCount={houseIntroduction.roomCount}
        />
      )}
      {!introductionType && (
        <HouseIntroduction houseIntroduction={houseIntroduction} />
      )}
    </PageContainer>
  );
}

export default MatchingDetailPage;

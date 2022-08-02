import React, { useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  DetailImgWrapper,
  DetailImg,
  DetailTabButton,
  DetailTabButtonDiv,
  DetailContentTitle,
  DetailTestDiv,
  DetailContent,
  DetailImgInfoWrapper,
  DetailImgInfoContent,
  DetailImgInfoDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';

const userTestResult = [true, true, false, true, false, false];

const selfIntroduction = {
  name: '김원희',
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
  const setType = () => {
    setIntroductionType(!introductionType);
  };
  return (
    <PageContainer>
      <DetailImgWrapper>
        <DetailImg
          src="https://image.kmib.co.kr/online_image/2020/0902/611817110014970749_1.jpg"
          alt="사진1"
        />
        <DetailImgInfoWrapper>
          <DetailImgInfoDiv>
            <DetailImgInfoContent>워니 | 동거 경험: 3개월</DetailImgInfoContent>
            <DetailImgInfoContent>마포구 | 26 | 여성</DetailImgInfoContent>
          </DetailImgInfoDiv>
        </DetailImgInfoWrapper>
      </DetailImgWrapper>
      <DetailTabButtonDiv>
        <DetailTabButton isTap={true} onClick={setType}>
          유저 소개
        </DetailTabButton>
        <DetailTabButton isTap={true} onClick={setType}>
          집 소개
        </DetailTabButton>
      </DetailTabButtonDiv>
      <div>
        {introductionType && (
          <>
            <DetailContentTitle>이름</DetailContentTitle>
            <DetailContent>{selfIntroduction.name}</DetailContent>
            <DetailContentTitle>거주 희망 기간</DetailContentTitle>
            <DetailContent>
              {parseInt(
                (selfIntroduction.desiredResidencePeriod / 30).toString()
              )}
              개월
            </DetailContent>
            <DetailContentTitle>
              이런 사람과 함께 살고 싶어요
            </DetailContentTitle>
            <DetailContent>{selfIntroduction.userMessage}</DetailContent>
            <DetailContentTitle>거주 성향 테스트</DetailContentTitle>
            <DetailTestDiv>
              {selfIntroduction.testResult.map((answer, index) => {
                if (answer === userTestResult[index]) {
                  return <div key={index.toString() + answer}>잘맞아요</div>;
                }
                return (
                  <div key={index.toString() + answer}>이부분은 다르네요</div>
                );
              })}
            </DetailTestDiv>
          </>
        )}
        {!introductionType && (
          <>
            <DetailContentTitle>방 개수</DetailContentTitle>
            <DetailContent>{houseIntroduction.roomCount}개</DetailContent>
            <DetailContentTitle>주거 타입 / 주거비용</DetailContentTitle>
            <DetailContent>
              {houseIntroduction.costType} /{' '}
              {houseIntroduction.cost.toLocaleString('ko-KR')}원
            </DetailContent>
            <DetailContentTitle>
              저희 집은 이런 특징을 가지고 있어요.
            </DetailContentTitle>
            <DetailContent>{houseIntroduction.houseMessage}</DetailContent>
          </>
        )}
      </div>
    </PageContainer>
  );
}

export default MatchingDetailPage;

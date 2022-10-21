import React, { useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  DetailInfoContainer,
  DetailTabButton,
  DetailTabButtonDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import UserIntroduction from 'components/mathingDetail/UserIntroduction';
import HouseIntroduction from 'components/mathingDetail/HouseIntroduction';
import DetailPhotos from 'components/mathingDetail/DetailPhotos';
import { useQuery } from '@tanstack/react-query';
import { fetchMatchingDetailInfo } from 'api/matchingDetailApi';
import { useParams } from 'react-router-dom';
import Loader from 'components/loader/Loader';

function MatchingDetailPage() {
  const [introductionType, setIntroductionType] = useState(true);
  let { userId } = useParams();
  const { data, isLoading } = useQuery(['matchingDetail', userId], () =>
    fetchMatchingDetailInfo(userId)
  );

  const setTypePerson = () => {
    return setIntroductionType(true);
  };

  const setTypeHouse = () => {
    return setIntroductionType(false);
  };

  if (isLoading) {
    return (
      <PageContainer style={{ justifyContent: 'center' }}>
        <Loader />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {data && (
        <DetailPhotos
          userBasicInfo={data?.data.detailUserInfo}
          photoUrls={data.data.detailHouseInfo.photoUrls.map(
            (imgId: number, index: number) => {
              if (index === 0) {
                return `${process.env.REACT_APP_SERVER_IP}/api/user/${userId}/img/represents`;
              } else {
                return `${process.env.REACT_APP_SERVER_IP}/api/user/${userId}/img/rest/${imgId}`;
              }
            }
          )}
        />
      )}
      <DetailInfoContainer>
        <DetailTabButtonDiv>
          <DetailTabButton isTap={introductionType} onClick={setTypePerson}>
            <p>유저 소개</p>
          </DetailTabButton>
          <DetailTabButton isTap={!introductionType} onClick={setTypeHouse}>
            <p>집 소개</p>
          </DetailTabButton>
        </DetailTabButtonDiv>
        {introductionType && data && (
          <UserIntroduction userIntroduction={data.data} />
        )}
        {!introductionType && data && (
          <HouseIntroduction houseIntroduction={data.data.detailHouseInfo} />
        )}
      </DetailInfoContainer>
    </PageContainer>
  );
}

export default MatchingDetailPage;

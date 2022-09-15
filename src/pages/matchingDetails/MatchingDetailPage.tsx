import React, { useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  DetailTabButton,
  DetailTabButtonDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import UserIntroduction from 'components/mathingDetail/UserIntroduction';
import HouseIntroduction from 'components/mathingDetail/HouseIntroduction';
import DetailPhotos from 'components/mathingDetail/DetailPhotos';
import { useQuery } from '@tanstack/react-query';
import { fetchMatchingDetailInfo } from 'api/matchingDetailApi';
import { useParams } from 'react-router-dom';

function MatchingDetailPage() {
  const [introductionType, setIntroductionType] = useState(true);
  let { userId } = useParams();
  const { data } = useQuery(['matchingDetail', userId], () =>
    fetchMatchingDetailInfo(userId)
  );

  const setTypePerson = () => {
    return setIntroductionType(true);
  };

  const setTypeHouse = () => {
    return setIntroductionType(false);
  };

  return (
    <PageContainer>
      {data && (
        <DetailPhotos
          userBasicInfo={data?.data.detailUserInfo}
          photoUrls={data.data.detailHouseInfo.photoUrls.map(
            (imgId: number) => {
              `${process.env.REACT_APP_SERVER_IP}/api/user/${userId}/img/rest/${imgId}`;
            }
          )}
        />
      )}
      <DetailTabButtonDiv>
        <DetailTabButton isTap={introductionType} onClick={setTypePerson}>
          유저 소개
        </DetailTabButton>
        <DetailTabButton isTap={!introductionType} onClick={setTypeHouse}>
          집 소개
        </DetailTabButton>
      </DetailTabButtonDiv>

      {introductionType && data && (
        <UserIntroduction userIntroduction={data.data} />
      )}
      {!introductionType && data && (
        <HouseIntroduction houseIntroduction={data.data.detailHouseInfo} />
      )}
    </PageContainer>
  );
}

export default MatchingDetailPage;

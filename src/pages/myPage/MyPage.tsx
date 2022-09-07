import React, { useState } from 'react';
import { PageContainer } from 'design/commonStyles';
import {
  MyPageBasicInfoBox,
  MyPageMenuButton,
} from 'design/myPageStyles/myPageStyles';
import MyLikeList from 'components/myPage/MyLikeList';
import MyIntroduceSelf from 'components/myPage/MyIntroductSelf';
import MyHouseIntroduce from 'components/myPage/MyHouseIntroduce';
import { getMypageData } from 'api/mypageApi';
import { useQuery } from '@tanstack/react-query';
import MyBasicInfo from 'components/myPage/MyBasicInfo';

function MyPage() {
  const [menuSelected, setMenuSelected] = useState(0);
  const { data, isLoading } = useQuery(['getData'], () => getMypageData(1));
  let userBasicData;
  let matchingData;
  let likedListData;
  let houseInfo: any = {};
  let myDataInfo: any = {};

  if (!isLoading) {
    userBasicData = data?.data.userBasicInfo;
    matchingData = data?.data.matchingInfo;
    likedListData = data?.data.likeListData;
    houseInfo.roomCount = matchingData.room;
    houseInfo.cost = matchingData.cost;
    houseInfo.houseDescription = matchingData.houseInfo;

    myDataInfo.experience = matchingData.experience;
    myDataInfo.wantPeriod = matchingData.want_long;
    myDataInfo.userMessage = matchingData.info;
  }
  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <PageContainer>
      <MyBasicInfo
        userBasicData={userBasicData}
        location={matchingData.location}
      />
      <MyPageBasicInfoBox marginTop={30}>
        <MyPageMenuButton
          menuSelected={menuSelected === 0}
          onClick={() => {
            setMenuSelected(0);
          }}
        >
          좋아요
        </MyPageMenuButton>
        <MyPageMenuButton
          menuSelected={menuSelected === 1}
          onClick={() => {
            setMenuSelected(1);
          }}
        >
          자기 소개
        </MyPageMenuButton>
        <MyPageMenuButton
          menuSelected={menuSelected === 2}
          onClick={() => {
            setMenuSelected(2);
          }}
        >
          집 등록
        </MyPageMenuButton>
      </MyPageBasicInfoBox>
      {menuSelected === 0 && <MyLikeList likeList={likedListData} />}
      {menuSelected === 1 && (
        <MyIntroduceSelf
          myInfoData={myDataInfo}
          userTestResult={matchingData.question}
        />
      )}
      {menuSelected === 2 && (
        <MyHouseIntroduce
          houseInfo={houseInfo}
          photoUrls={[
            'https://picsum.photos/800/600?random=1',
            'https://picsum.photos/800/600?random=2',
            'https://picsum.photos/800/600?random=3',
            'https://picsum.photos/800/600?random=4',
          ]}
        />
      )}
    </PageContainer>
  );
}

export default MyPage;

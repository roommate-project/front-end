import React, { useState } from 'react';
import {
  MyPageBasicInfoBox,
  MyPageContainer,
  MypageInfoBox,
  MypageInfoContainer,
  MyPageMenuButton,
} from 'design/myPageStyles/myPageStyles';
import MyLikeList from 'components/myPage/MyLikeList';
import MyIntroduceSelf from 'components/myPage/MyIntroductSelf';
import MyHouseIntroduce from 'components/myPage/MyHouseIntroduce';
import { getMypageData } from 'api/mypageApi';
import { useQuery } from '@tanstack/react-query';
import MyBasicInfo from 'components/myPage/MyBasicInfo';
import Loader from 'components/loader/Loader';
import { PageContainer } from 'design/commonStyles';

function MyPage() {
  const [menuSelected, setMenuSelected] = useState(0);
  const { data, isLoading } = useQuery(['getData'], getMypageData, {
    onSuccess: data => console.log(data.data),
  });
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
    houseInfo.restImagesId = matchingData.restImagesId;

    myDataInfo.experience = matchingData.experience;
    myDataInfo.wantPeriod = matchingData.want_long;
    myDataInfo.userMessage = matchingData.info;
  }
  if (isLoading) {
    return (
      <PageContainer style={{ justifyContent: 'center' }}>
        <Loader />
      </PageContainer>
    );
  }

  return (
    <MyPageContainer>
      <MyBasicInfo
        userBasicData={userBasicData}
        location={matchingData.location}
      />
      <MypageInfoBox>
        <MyPageBasicInfoBox>
          <MyPageMenuButton
            isTap={menuSelected === 0}
            onClick={() => {
              setMenuSelected(0);
            }}
          >
            <p>좋아요</p>
          </MyPageMenuButton>
          <MyPageMenuButton
            isTap={menuSelected === 1}
            onClick={() => {
              setMenuSelected(1);
            }}
          >
            <p>자기 소개</p>
          </MyPageMenuButton>
          <MyPageMenuButton
            isTap={menuSelected === 2}
            onClick={() => {
              setMenuSelected(2);
            }}
          >
            <p>집 등록</p>
          </MyPageMenuButton>
        </MyPageBasicInfoBox>
        <MypageInfoContainer>
          {menuSelected === 0 && <MyLikeList likeList={likedListData} />}
          {menuSelected === 1 && (
            <MyIntroduceSelf
              myInfoData={myDataInfo}
              userTestResult={matchingData.question}
            />
          )}
          {menuSelected === 2 && <MyHouseIntroduce houseInfo={houseInfo} />}
        </MypageInfoContainer>
      </MypageInfoBox>
    </MyPageContainer>
  );
}

export default MyPage;

import React, { useState } from 'react';
import { PageContainer } from 'pages/signup/SignUpStyle';
import {
  MyPageBackground,
  MyPageBasicInfo,
  MyPageBasicInfoBox,
  MyPageMenuButton,
  MyPageRepresentiveImg,
  MyPageTopBackground,
} from 'design/myPageStyles/myPageStyles';
import MyLikeList from 'components/myPage/MyLikeList';
import MyIntroduceSelf from 'components/myPage/MyIntroductSelf';
import MyHouseIntroduce from 'components/myPage/MyHouseIntroduce';

function MyPage() {
  const [menuSelected, setMenuSelected] = useState(0);

  return (
    <PageContainer>
      <MyPageTopBackground>
        <MyPageRepresentiveImg
          src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/4429919ce17c4d45b3c9095468065cbc/eff09c43aff1460f885dca2a6974dd85_1606815289.jpg"
          alt="대표 이미지"
        />
      </MyPageTopBackground>
      <MyPageBackground>
        <MyPageBasicInfo>닉네임</MyPageBasicInfo>
        <MyPageBasicInfoBox marginTop={30}>
          <MyPageBasicInfo>성별</MyPageBasicInfo>
          <MyPageBasicInfo>나이</MyPageBasicInfo>
          <MyPageBasicInfo>지역</MyPageBasicInfo>
        </MyPageBasicInfoBox>
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
        {menuSelected === 0 && <MyLikeList />}
        {menuSelected === 1 && <MyIntroduceSelf />}
        {menuSelected === 2 && <MyHouseIntroduce />}
      </MyPageBackground>
    </PageContainer>
  );
}

export default MyPage;

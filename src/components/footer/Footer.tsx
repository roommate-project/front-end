import React from 'react';
import {
  FooterDiv,
  FooterCategory,
  FooterContent,
  FooterSeat,
  FooterTitle,
  FooterContentBox,
  FooterContainer,
} from 'components/footer/footerStyles';

function Footer() {
  return (
    <>
      <FooterDiv>
        <FooterTitle>ROOM-MATE-PROJECT</FooterTitle>
        <FooterContainer>
          <FooterContentBox>
            <FooterCategory>개발자</FooterCategory>
            <FooterContent>
              프론트 엔드 | 김원희, 박수진 <br />백 엔드 | 최재성
            </FooterContent>
          </FooterContentBox>
          <FooterContentBox>
            <FooterCategory>연락처</FooterCategory>
            <FooterContent>hello_world_@kakao.com</FooterContent>
          </FooterContentBox>
          <FooterContentBox>
            <FooterCategory>Git 주소</FooterCategory>
            <FooterContent>https://github.com/roommate-project</FooterContent>
          </FooterContentBox>
        </FooterContainer>
        <FooterContent>
          Copyright2022.roommate-project All rights reserved.
        </FooterContent>
      </FooterDiv>
      <FooterSeat />
    </>
  );
}

export default Footer;

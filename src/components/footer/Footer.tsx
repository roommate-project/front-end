import React from 'react';
import {
  FooterDiv,
  FooterCategory,
  FooterContent,
  FooterTitle,
  FooterContentBox,
  FooterContainer,
} from 'components/footer/footerStyles';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const visibleFooter = () => {
    if (location.pathname === '/') {
      return true;
    } else return false;
  };

  return (
    <>
      <FooterDiv visible={visibleFooter()}>
        <FooterTitle>ROOM-MATE-PROJECT</FooterTitle>
        <FooterContainer>
          <FooterContentBox>
            <FooterCategory>개발자</FooterCategory>
            <FooterContent>
              프론트 엔드 | 김원희, 박수진 <br /> 백 엔드 | 최재성, 임서영
            </FooterContent>
          </FooterContentBox>
          <FooterContentBox>
            <FooterCategory>Git 주소</FooterCategory>
            <FooterContent>https://github.com/roommate-project</FooterContent>
          </FooterContentBox>
          <FooterContentBox>
            <FooterCategory>연락처</FooterCategory>
            <FooterContent>hello_world_@kakao.com</FooterContent>
          </FooterContentBox>
        </FooterContainer>
        <FooterContent style={{ margin: '30px 0' }}>
          Copyright2022.roommate-project All rights reserved.
        </FooterContent>
      </FooterDiv>
    </>
  );
}

export default Footer;

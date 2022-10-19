import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContentsBox,
  HeaderDiv,
  HeaderIcon,
  HeaderStyle,
  HeaderTitle,
} from 'components/header/headerStyles';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { ReactComponent as MessagesLogo } from 'assets/messages.svg';
import { ReactComponent as MypageLogo } from 'assets/mypage.svg';
import { ReactComponent as FilterIcon } from 'assets/filterIcon.svg';

const pageDatas = [
  {
    route: '/chat-list',
    name: <MessagesLogo height={30} />,
  },
  {
    route: '/',
    name: <RoommateLogo height={28} />,
  },
  {
    route: '/my-page',
    name: <MypageLogo height={30} />,
  },
  {
    route: '/register-house-info',
    name: '집 등록 페이지',
  },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const matchingDetail = useMatch('matching/detail/:userId');
  const chatPage = useMatch('chat-list/chat/:roomId');

  const noneBackButton = () => {
    if (chatPage) {
      return false;
    }
    if (
      location.pathname === '/' ||
      location.pathname === '/chat-list' ||
      location.pathname === '/my-page' ||
      location.pathname === '/sign-up' ||
      location.pathname === '/login'
    ) {
      return true;
    }
    return false;
  };

  const visibleFilterButton = () => {
    if (location.pathname === '/') {
      return true;
    }
    return false;
  };

  const setPageTitle = () => {
    let pageName;
    pageDatas.forEach(page => {
      if (page.route === location.pathname) {
        pageName = page.name;
      }
    });
    return pageName;
  };

  const visibleHeader = () => {
    if (matchingDetail) {
      return false;
    } else return true;
  };

  return (
    <HeaderDiv>
      <HeaderStyle isVisible={visibleHeader()}>
        <HeaderContentsBox>
          <HeaderIcon rights={false} left={true} isVisible={visibleHeader()}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => {
                navigate(-1);
              }}
              style={{ display: `${noneBackButton() ? 'none' : ''}` }}
            />
          </HeaderIcon>
          <HeaderTitle>{setPageTitle()}</HeaderTitle>
          <HeaderIcon rights={true} left={false} isVisible={visibleHeader()}>
            <FilterIcon
              height={24}
              onClick={() => {
                navigate('/filter');
              }}
              style={{ display: `${visibleFilterButton() ? '' : 'none'}` }}
            />
          </HeaderIcon>
        </HeaderContentsBox>
      </HeaderStyle>
    </HeaderDiv>
  );
}

export default Header;

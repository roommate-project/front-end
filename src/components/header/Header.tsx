import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderDiv,
  HeaderIcon,
  HeaderStyle,
  HeaderTitle,
} from './headerStyles';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';

const pageDatas = [
  {
    route: '/chat-list',
    name: '채팅 목록',
  },
  {
    route: '/',
    name: '룸-메이트',
  },
  {
    route: '/matching/detail',
    name: '상세보기',
  },
  {
    route: '/my-page',
    name: '마이 페이지',
  },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const matchingDetail = useMatch('matching/detail/:userId');
  const chatPage = useMatch('chat-list/chat/:chatId');

  const noneHeader = () => {
    if (
      location.pathname ===
      ('/login' ||
        '/login/email' ||
        '/sign-up' ||
        '/sign-up/email' ||
        '/sign-up/email-auth' ||
        '/sign-up/email-auth/last' ||
        '/matching-filter')
    ) {
      return true;
    }
    return false;
  };

  const noneBackButton = () => {
    if (chatPage) {
      return false;
    }
    if (location.pathname === '/' || '/chat-list' || '/my-page') {
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

  const setPageName = () => {
    let pageName = '';
    pageDatas.forEach(page => {
      if (page.route === location.pathname) {
        pageName = page.name;
      }
    });
    if (matchingDetail) {
      pageName = '상세 페이지';
    }
    if (chatPage) {
      pageName = '채팅 페이지';
    }
    return pageName;
  };

  return (
    <HeaderDiv visible={noneHeader()}>
      <HeaderStyle>
        <HeaderIcon rights={false} left={true}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              navigate(-1);
            }}
            style={{ display: `${noneBackButton() ? 'none' : ''}` }}
          />
        </HeaderIcon>
        <HeaderTitle>{setPageName()}</HeaderTitle>
        <HeaderIcon rights={true} left={false}>
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => {
              navigate('/filter');
            }}
            style={{ display: `${visibleFilterButton() ? '' : 'none'} ` }}
          />
        </HeaderIcon>
      </HeaderStyle>
    </HeaderDiv>
  );
}

export default Header;

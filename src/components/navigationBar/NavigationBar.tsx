import {
  NavigationDiv,
  NavigationTabIconStyle,
  NavigationIcon,
  NavigationIconTitle,
  NavContentsBox,
} from 'components/navigationBar/navigationBarStyles';
import {
  faMagnifyingGlass,
  faCommentDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { MouseEventHandler, useState } from 'react';

type NavigationProps = {
  title: string;
  icon: IconProp;
  isActive: boolean;
  path: string;
  onClickBtn: MouseEventHandler;
};

const NavigationTabIcon = ({
  title,
  icon,
  isActive,
  path,
  onClickBtn,
}: NavigationProps) => {
  return (
    <Link to={path}>
      <NavigationTabIconStyle onClick={onClickBtn}>
        <NavigationIcon isActive={isActive}>
          <FontAwesomeIcon icon={icon} />
        </NavigationIcon>
        <NavigationIconTitle isActive={isActive}>{title}</NavigationIconTitle>
      </NavigationTabIconStyle>
    </Link>
  );
};

const tabInfo = [
  { path: '/', title: '매칭', icon: faMagnifyingGlass },
  { path: '/chat-list', title: '채팅', icon: faCommentDots },
  { path: '/my-page', title: '마이페이지', icon: faUser },
];

function NavigationBar() {
  const [activePage, setActivePage] = useState([true, false, false]);
  const location = useLocation();
  const chatPage = useMatch('chat-list/chat/:chatId');

  const isActive = (indexs: number) => {
    let newActivPage = [...activePage];
    setActivePage(
      newActivPage.map((i, index) => (index !== indexs ? false : true))
    );
  };

  const isVisible = () => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/login/email' ||
      location.pathname === '/sign-up' ||
      location.pathname === '/sign-up/email' ||
      location.pathname === '/sign-up/email-auth' ||
      location.pathname === '/sign-up/email-auth/last' ||
      location.pathname === '/register-house-info'
    ) {
      return false;
    }
    if (chatPage) {
      return false;
    } else return true;
  };

  return (
    <NavigationDiv visible={isVisible()}>
      <NavContentsBox>
        {chatPage
          ? null
          : tabInfo.map((info, index) => {
              return (
                <NavigationTabIcon
                  key={info.path}
                  path={info.path}
                  title={info.title}
                  icon={info.icon}
                  isActive={activePage[index]}
                  onClickBtn={() => {
                    isActive(index);
                  }}
                />
              );
            })}
      </NavContentsBox>
    </NavigationDiv>
  );
}

export default NavigationBar;

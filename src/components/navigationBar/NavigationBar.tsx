import {
  NavigationDiv,
  NavigationTabIconStyle,
  NavigationIcon,
  NavigationIconTitle,
} from 'components/navigationBar/navigationBarStyles';
import {
  faMagnifyingGlass,
  faCommentDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
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
      <NavigationTabIconStyle>
        <NavigationIcon isActive={isActive}>
          <FontAwesomeIcon icon={icon} onClick={onClickBtn} />
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
  const isActive = (indexs: number) => {
    let newActivPage = [...activePage];
    setActivePage(
      newActivPage.map((i, index) => (index !== indexs ? false : true))
    );
  };
  return (
    <NavigationDiv>
      {tabInfo.map((info, index) => {
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
    </NavigationDiv>
  );
}

export default NavigationBar;

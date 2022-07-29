import React from 'react';
import styled from 'styled-components';
import {
  faMagnifyingGlass,
  faCommentDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

const NavigationDiv = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.mainWhite};
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;

const NavigationIcon = styled.span`
  font-size: 22px;
`;

const NavigationIconTitle = styled.span`
  font-size: 18px;
`;

const NavigationTabIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  color: ${props => props.theme.mainGrey};
`;

const NavigationTabIcon = (icon: IconDefinition, title: string) => {
  return (
    <NavigationTabIconStyle>
      <NavigationIcon>
        <FontAwesomeIcon icon={icon as IconProp} />
      </NavigationIcon>
      <NavigationIconTitle>{title}</NavigationIconTitle>
    </NavigationTabIconStyle>
  );
};

function Footer() {
  return (
    <NavigationDiv>
      {/* FIXME 아이콘 type 맞추기 */}
      {/* <NavigationTabIcon icon={faMagnifyingGlass} title={'매칭'} />
      <NavigationTabIcon icon={faCommentDots} title={'채팅'} />
      <NavigationTabIcon icon={faUser} title={'마이페이지'} /> */}
    </NavigationDiv>
  );
}

export default Footer;

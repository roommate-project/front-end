import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderDiv,
  HeaderIcon,
  HeaderStyle,
  HeaderTitle,
} from './headerStyles';

function Header() {
  return (
    <HeaderDiv>
      <HeaderStyle>
        <HeaderIcon rights={false} left={true}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </HeaderIcon>
        <HeaderTitle>ROOM-MATE</HeaderTitle>
        <HeaderIcon rights={true} left={false}>
          <FontAwesomeIcon icon={faFilter} />
        </HeaderIcon>
      </HeaderStyle>
    </HeaderDiv>
  );
}

export default Header;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderDiv,
  HeaderIcon,
  HeaderStyle,
  HeaderTitle,
} from './headerStyles';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <HeaderStyle>
        <HeaderIcon rights={false} left={true}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              navigate(-1);
            }}
          />
        </HeaderIcon>
        <HeaderTitle>ROOM-MATE</HeaderTitle>
        <HeaderIcon rights={true} left={false}>
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => {
              navigate('/filter');
            }}
          />
        </HeaderIcon>
      </HeaderStyle>
    </HeaderDiv>
  );
}

export default Header;

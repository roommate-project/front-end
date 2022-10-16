import styled from 'styled-components';

interface IconStyled {
  rights: boolean;
  left: boolean;
  isVisible: boolean;
}

export const HeaderDiv = styled('div')`
  display: relative;
`;

export const HeaderStyle = styled.header<{ isVisible: boolean }>`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: ${props =>
    props.isVisible ? props.theme.mainWhite : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContentsBox = styled.div`
  position: relative;
  max-width: 76.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  text-align: center;
`;

export const HeaderIcon = styled('span')<IconStyled>`
  font-size: 24px;
  position: absolute;
  right: ${props => props.rights && '20px'};
  left: ${props => props.left && '20px'};
  cursor: pointer;
  color: ${props =>
    props.isVisible ? props.theme.mainBlack : props.theme.mainWhite};
`;

import styled from 'styled-components';

interface IconStyled {
  rights: boolean;
  left: boolean;
}

export const HeaderDiv = styled.div`
  display: relative;
`;

export const HeaderStyle = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.mainWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  text-align: center;
  font-size: 30px;
  color: ${props => props.theme.mainRed};
`;

export const HeaderIcon = styled('span')<IconStyled>`
  font-size: 24px;
  position: absolute;
  right: ${props => props.rights && '30px'};
  left: ${props => props.left && '30px'};
  cursor: pointer;
`;

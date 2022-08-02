import styled from 'styled-components';

interface IconStyled {
  isActive: boolean;
}

export const NavigationDiv = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.mainWhite};
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const NavigationIcon = styled('span')<IconStyled>`
  font-size: 22px;
  color: ${props => props.isActive && props.theme.mainRed};
`;

export const NavigationIconTitle = styled('span')<IconStyled>`
  font-size: 18px;
  color: ${props => props.isActive && props.theme.mainBlack};
`;

export const NavigationTabIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  color: ${props => props.theme.mainGrey};
`;

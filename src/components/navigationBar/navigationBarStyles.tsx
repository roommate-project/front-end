import { HeaderContentsBox } from 'components/header/headerStyles';
import styled from 'styled-components';

interface IconStyled {
  isActive: boolean;
}

export const NavigationDiv = styled.nav<{ visible: boolean }>`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.mainWhite};
  position: fixed;
  left: 0;
  bottom: 0;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: space-evenly;
`;

export const NavContentsBox = styled(HeaderContentsBox)`
  padding: 0 20px;
  justify-content: space-between;
`;

export const NavigationIcon = styled('span')<IconStyled>`
  font-size: 22px;
  color: ${props => props.isActive && props.theme.darkRed};
`;

export const NavigationIconTitle = styled.span<IconStyled>`
  font-size: 18px;
  color: ${props => props.isActive && props.theme.darkRed};
`;

export const NavigationTabIconStyle = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.mainGrey};
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MyPageTopBackground = styled.div`
  background-color: ${props => props.theme.mainYellow};
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
`;

export const MyPageRepresentiveImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-top: 90px;
  z-index: 1;
  position: relative;
`;

export const MyPageEditIcon = styled(FontAwesomeIcon)`
  z-index: 1;
  width: 25px;
  height: 25px;
  margin-top: 135px;
  position: absolute;
  left: 52%;
  color: ${props => props.theme.mainRed};
  background-color: ${props => props.theme.mainWhite};
  border-radius: 100px;
`;
export const MyPagePhotoInput = styled.input`
  opacity: 0;
  width: 100px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-top: 115px;
  z-index: 3;
`;

export const MyPageBackground = styled.div`
  background-color: ${props => props.theme.mainWhite};
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: start;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

export const MyPageBasicInfo = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const MyPageBasicInfoBox = styled('div')<{ marginTop: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${props => props.marginTop};
  padding: 10px;
  width: 100%;
`;

export const MyPageMenuButton = styled('div')<{ menuSelected: boolean }>`
  padding: 10px;
  background-color: ${props =>
    props.menuSelected ? props.theme.mainPink : props.theme.mainWhite};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.mainBlack};
  font-size: 18px;
  min-width: 33%;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  text-align: center;
`;

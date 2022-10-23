import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DetailInfoContainer,
  DetailTabButton,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import { PageContainer } from 'design/commonStyles';

export const MyPageContainer = styled(PageContainer)`
  margin-top: 50px;
`;

export const MyPageTopContainer = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MypageInfoBox = styled(DetailInfoContainer)`
  margin-top: 50px;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.07);
  min-height: calc(100% - 320px);
`;

export const MyPageRepresentiveImg = styled.img`
  max-width: 160px;
  max-height: 160px;
  width: 30vw;
  height: 30vw;
  border-radius: 80px;
  z-index: 1;
  position: relative;
`;

export const ImgEditBtn = styled.div`
  position: relative;
`;

export const MyPageEditIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  width: 8vw;
  height: 8vw;
  max-width: 40px;
  max-height: 40px;
  bottom: 0;
  right: 0;
  color: ${props => props.theme.mainRed};
  background-color: ${props => props.theme.mainWhite};
  border-radius: 100px;
`;

export const MyPagePhotoInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100px;
  height: 50px;
  z-index: 3;
  bottom: 0;
  right: 0;
  cursor: pointer;
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

export const MyPageBasicInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const MyPageMenuButton = styled(DetailTabButton)`
  text-align: center;
`;

export const MypageInfoContainer = styled.div`
  padding: 0 20px;
  margin: 20px 0;
  margin-bottom: 60px;
`;

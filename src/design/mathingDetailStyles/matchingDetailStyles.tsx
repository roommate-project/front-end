import styled from 'styled-components';

export const DetailImgWrapper = styled.div`
  width: 100%;
  height: 45vh;
  position: relative;
`;

export const DetailImg = styled.img`
  width: 100%;
  height: 45vh;
`;

export const DetailImgInfoWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.mainWhite};
  opacity: 0.8;
  padding: 2px;
  display: flex;
`;

export const DetailImgInfoDiv = styled.div`
  width: 70%;
`;

export const DetailImgInfoContent = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
`;

export const DetailTabButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
`;

export const DetailTabButton = styled.div<{ isTap: boolean }>`
  width: 50%;
  height: 38px;
  font-size: 18px;
  border-bottom: 4px solid
    ${props => (props.isTap ? props.theme.mainYellow : props.theme.mainWhite)};
  align-items: center;
  padding: 8px;
  background-color: ${props =>
    props.isTap ? props.theme.mainRed : props.theme.mainWhite};
`;

export const DetailContentTitle = styled.p`
  font-size: 18px;
  line-height: 28px;
  padding: 5px 5px 0 10px;
  font-weight: 700;
`;

export const DetailTestDiv = styled.div`
  display: flex;
`;

export const DetailContent = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundGrey};
  width: 80%;
  margin: 10px;
  border-radius: 8px;
`;

export const IntroductionEmphasis = styled.span`
  color: ${props => props.theme.mainRed};
  font-weight: 700;
`;

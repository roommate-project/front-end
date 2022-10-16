import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

export const DetailImgWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const DetailImg = styled.img`
  min-width: 100%;
  height: 320px;
  object-fit: cover;
`;

export const DetailImgInfoWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailImgInfoContent = styled.p`
  flex-direction: column;
  margin-left: 20px;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.mainWhite};
  span {
    font-size: 18px;
  }
`;

export const DetailInfoContainer = styled.div`
  position: absolute;
  top: 290px;
  max-width: 76.8rem;
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.mainWhite};
`;

export const DetailTabButtonDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const DetailTabButton = styled.div<{ isTap: boolean }>`
  width: 50%;
  height: 44px;
  background: ${props =>
    props.isTap ? props.theme.mainWhite : props.theme.backgroundGrey};
  background-color: ${props => (props.isTap ? 'none' : props.theme.mainGrey)};
  color: ${props =>
    props.isTap ? props.theme.mainBlack : props.theme.mainWhite};
  p {
    line-height: 44px;
    font-size: 18px;
  }
`;

export const IntroductionBox = styled.div`
  margin: 20px 0px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const DetailContentTitle = styled.p`
  font-size: 16px;
  margin: 10px;
  font-weight: 700;
`;

export const DetailContent = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundGrey};
  width: 100%;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const MatchingRateInfo = styled(DetailContent)`
  text-align: center;
  background-color: transparent;
  span {
    font-size: 28px;
    color: ${props => props.theme.mainRed};
  }
  margin-bottom: 20px;
`;

export const IntroductionEmphasis = styled.span`
  color: ${props => props.theme.mainRed};
  font-weight: 700;
`;

export const ChatButtonDiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 30px;
  background-color: #ffffff;
  border: 0;
  box-sizing: border-box;
  color: #111827;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 20px;
`;

export const ChatButtonIcon = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.mainPurple};
  font-size: 26px;
`;

export const MatchingRateMessage = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.mainYellow};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
`;

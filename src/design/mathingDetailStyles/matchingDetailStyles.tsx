import styled from 'styled-components';

export const DetailImgWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const DetailImg = styled.img`
  min-width: 100%;
  height: 300px;
`;

export const DetailImgInfoWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.mainWhite};
  display: flex;
  justify-content: space-between;
`;

export const DetailImgInfoDiv = styled.div`
  flex-direction: column;
  margin-left: 20px;
`;

export const DetailImgInfoContent = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
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
    ${props => (props.isTap ? props.theme.mainOrange : props.theme.mainGrey)};
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

export const DetailContent = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundGrey};
  width: 100%;
  margin: 10px;
  border-radius: 8px;
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
  background-color: #FFFFFF;
  border: 0;
  box-sizing: border-box;
  color: #111827;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right:20px;

}
`;

export const ChatButtonIcon = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
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

export const LikeIconDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

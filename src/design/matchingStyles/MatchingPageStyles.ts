import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IMatchingCircleBtnProps {
  types: string;
  $isLike?: boolean;
}

export const MatchingImgContainer = styled(motion.div)<{ $bgImage: string }>`
  position: absolute;
  width: 85%;
  height: 75%;
  border-radius: 50px;
  background-image: ${props => `url(${props.$bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  font-size: 50px;
`;

export const MatchingInfoBox = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  background: linear-gradient(to bottom, rgba(255, 73, 73, 0.3), transparent);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MatchingUserInfo = styled.div`
  color: ${props => props.theme.mainWhite};
  font-size: 18px;
  margin-left: 20px;
  span {
    font-size: 20px;
    margin-left: 5px;
  }
  p {
    font-style: italic;
  }
`;

export const MatchinglocationInfo = styled.div`
  color: ${props => props.theme.mainWhite};
  font-size: 18px;
  margin-right: 20px;
`;

export const MatchingCircleBtnBox = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  bottom: 30px;
`;

export const MatchingCircleBtn = styled.div<IMatchingCircleBtnProps>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  svg {
    font-size: 36px;
    color: ${props =>
      props.types === 'chat'
        ? props.theme.mainPurple
        : props.$isLike
        ? props.theme.mainRed
        : props.theme.mainGrey};
  }
`;

export const MachingCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

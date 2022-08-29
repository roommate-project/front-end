import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MatchingImgContainer = styled(motion.div)`
  position: absolute;
  width: 85%;
  height: 75%;
  border-radius: 50px;
  background-image: url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
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
`;

export const MatchinglocationInfo = styled.div`
  color: ${props => props.theme.mainWhite};
  font-size: 18px;
`;

export const MatchingCircleBox = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  bottom: 30px;
`;

export const MatchingCircle = styled.div<{ types: string }>`
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
      props.types === 'like' ? props.theme.mainRed : props.theme.mainPurple};
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

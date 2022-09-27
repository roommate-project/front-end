import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoaderStyle = styled(motion.div)`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

export const LoaderCircleStyle = styled(motion.span)`
  display: block;
  width: 10px;
  height: 10px;
  background-image: ${props => props.theme.mainGradient};
  border-radius: 10px;
  margin-bottom: 10px;
`;

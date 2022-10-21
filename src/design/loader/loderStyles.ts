import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoaderStyle = styled(motion.div)`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  margin: 8px auto;
`;

export const LoaderCircleStyle = styled(motion.span)`
  display: block;
  width: 8px;
  height: 8px;
  background-image: ${props => props.theme.mainGradient};
  border-radius: 10px;
  margin-bottom: 10px;
`;

import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ITrackProps {
  $trackWidth: number;
  $minHandle: number;
  $maxHandle: number;
  $trackHeight: number;
}

interface IHandleProps {
  $handleSize: number;
  $trackHeight: number;
}

export const RangeSliderBox = styled.div<{ $trackWidth: number }>`
  width: ${props => props.$trackWidth}px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SliderTrack = styled(motion.div)<ITrackProps>`
  position: relative;
  width: ${props => props.$trackWidth}px;
  height: ${props => props.$trackHeight}px;
  border-radius: calc(${props => props.$trackHeight}px / 2);
  background-color: ${props => props.theme.mainRed};
  background: linear-gradient(
    to right,
    #dfdfdf ${props => 100 * (props.$minHandle / props.$trackWidth)}%,
    #ff4949 ${props => 100 * (props.$minHandle / props.$trackWidth) + 2}%,
    #ff4949 ${props => 100 * (props.$maxHandle / props.$trackWidth) - 2}%,
    #dfdfdf ${props => 100 * (props.$maxHandle / props.$trackWidth)}%
  );
`;

export const ValueHandle = styled(motion.div)<IHandleProps>`
  position: absolute;
  width: ${props => props.$handleSize}px;
  height: ${props => props.$handleSize}px;
  top: calc(${props => props.$trackHeight - props.$handleSize}px / 2);
  background-color: ${props => props.theme.mainWhite};
  border-radius: 50%;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:last-child {
    left: -${props => props.$handleSize}px;
  }
`;

export const RangeLabel = styled.p`
  color: ${props => props.theme.mainRed};
  font-size: 16px;
  align-self: flex-end;
`;

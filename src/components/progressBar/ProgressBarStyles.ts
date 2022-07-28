import styled from 'styled-components';

interface ProgressBarStyled {
  width: number;
}

export const ProgressBarBackground = styled.div`
  background-color: #e7e3e3;
  width: 300px;
  margin: 0 auto;
  height: 20px;
  position: relative;
  margin-top: 100px;
`;

export const ProgressBarInner = styled('div')<ProgressBarStyled>`
  background-color: #000000;
  width: ${props => `${props.width}px`};
  margin: 0 auto;
  height: 20px;
  position: absolute;
`;

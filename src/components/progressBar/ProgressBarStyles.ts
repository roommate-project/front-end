import styled from 'styled-components';

interface ProgressBarStyled {
  width: number;
}

export const ProgressBarContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 100px;
`;

export const ProgressBarBackground = styled.div`
  position: relative;
  width: 50%;
  max-width: 400px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundGrey};
  margin: 0 auto;
`;

export const ProgressBarInner = styled('div')<ProgressBarStyled>`
  position: absolute;
  width: ${props => `${props.width}%`};
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.mainRed};
  margin: 0 auto;
`;

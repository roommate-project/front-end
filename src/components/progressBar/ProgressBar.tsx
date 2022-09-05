import React from 'react';
import {
  ProgressBarBackground,
  ProgressBarContainer,
  ProgressBarInner,
} from 'components/progressBar/ProgressBarStyles';

type WidthProp = {
  width: number;
};

function ProgressBar({ width }: WidthProp) {
  return (
    <ProgressBarContainer>
      <ProgressBarBackground>
        <ProgressBarInner width={width} />
      </ProgressBarBackground>
    </ProgressBarContainer>
  );
}

export default ProgressBar;

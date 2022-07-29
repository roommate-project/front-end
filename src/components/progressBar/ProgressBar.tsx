import React from 'react';
import {
  ProgressBarBackground,
  ProgressBarInner,
} from 'components/progressBar/ProgressBarStyles';

type WidthProp = {
  width: number;
};

function ProgressBar({ width }: WidthProp) {
  return (
    <>
      <ProgressBarBackground>
        <ProgressBarInner width={width} />
      </ProgressBarBackground>
    </>
  );
}

export default ProgressBar;

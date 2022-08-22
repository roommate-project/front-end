import { useRef, useState } from 'react';
import {
  RangeLabel,
  RangeSliderBox,
  SliderTrack,
  ValueHandle,
} from 'components/rangeSlider/RangeSliderStyle';

interface ISliderProps {
  max: number;
  unit: number;
  setSliderMin: (value: number) => void;
  setSliderMax: (value: number | string) => void;
  defaultMin?: number;
  defaultMax?: number;
  index: string;
}

function RangeSlider({
  max,
  unit,
  setSliderMin,
  setSliderMax,
  defaultMin,
  defaultMax,
  index,
}: ISliderProps) {
  const filterRef = useRef<HTMLDivElement>(null);

  const getValue = (handle: number) => {
    const value = parseInt((max / (trackWidth / handle)).toFixed(0), 10);
    return Math.ceil(value / unit) * unit;
  };

  const handleSize = 30;
  const trackWidth: number = 600;
  const trackHeight = 12;
  const minWidthBetweenHandle = handleSize * 2;

  const [minHandle, setMinHandle] = useState(
    defaultMin ? getValue(defaultMin) : 0
  );
  const [maxHandle, setMaxHandle] = useState(
    defaultMax ? getValue(defaultMax) : trackWidth
  );

  const clibratedMinValue =
    Math.ceil(max / (trackWidth / minHandle) / unit) * unit;

  const clibratedMaxValue =
    Math.ceil(max / (trackWidth / maxHandle) / unit) * unit;

  const onDragMinHandler = (info: any) => {
    const XminHandle =
      info.point.x - filterRef.current!.getBoundingClientRect().left;
    const newValue =
      XminHandle > maxHandle - minWidthBetweenHandle
        ? maxHandle - minWidthBetweenHandle
        : XminHandle;
    setMinHandle(newValue < 0 ? 0 : Math.ceil(newValue / unit) * unit);
  };

  const onDragMaxHandler = (info: any) => {
    const XmaxHandle =
      info.point.x - filterRef.current!.getBoundingClientRect().left;
    const newValue =
      XmaxHandle > trackWidth
        ? trackWidth
        : XmaxHandle < minHandle + minWidthBetweenHandle
        ? minHandle + minWidthBetweenHandle
        : XmaxHandle;
    setMaxHandle(Math.ceil(newValue / unit) * unit);
  };

  return (
    <RangeSliderBox $trackWidth={trackWidth}>
      <input type="hidden" name={'min'} value={clibratedMinValue}></input>
      <input type="hidden" name={'max'} value={clibratedMaxValue}></input>
      <RangeLabel>
        {clibratedMinValue}
        {index} ~ {clibratedMaxValue === max ? '무제한' : clibratedMaxValue}
        {clibratedMaxValue === max ? null : index}
      </RangeLabel>
      <SliderTrack
        ref={filterRef}
        $trackWidth={trackWidth}
        $trackHeight={trackHeight}
        $minHandle={minHandle}
        $maxHandle={maxHandle}
      >
        <ValueHandle
          $handleSize={handleSize}
          $trackHeight={trackHeight}
          drag="x"
          initial={{
            x: minHandle,
          }}
          onDrag={(e, info) => onDragMinHandler(info)}
          onDragEnd={() => {
            const minValue = Number(getValue(minHandle));
            setSliderMin(minValue);
          }}
          dragConstraints={{
            left: 0,
            right: maxHandle - minWidthBetweenHandle,
          }}
          dragMomentum={false}
          dragElastic={0}
        />
        <ValueHandle
          $handleSize={handleSize}
          $trackHeight={trackHeight}
          drag="x"
          initial={{
            x: maxHandle,
          }}
          onDrag={(e, info) => onDragMaxHandler(info)}
          onDragEnd={() => {
            const maxValue = Number(getValue(maxHandle));
            setSliderMax(maxValue);
          }}
          dragConstraints={{
            left: minHandle + minWidthBetweenHandle,
            right: trackWidth,
          }}
          dragMomentum={false}
          dragElastic={0}
        />
      </SliderTrack>
    </RangeSliderBox>
  );
}

export default RangeSlider;

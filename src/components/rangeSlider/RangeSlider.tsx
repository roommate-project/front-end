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
  sliderMin: number;
  sliderMax: number | string;
  setSliderMin: (value: number) => void;
  setSliderMax: (value: number | string) => void;
  defaultMin?: number;
  defaultMax?: number;
}

function RangeSlider({
  max,
  unit,
  sliderMin,
  sliderMax,
  setSliderMin,
  setSliderMax,
  defaultMin,
  defaultMax,
}: ISliderProps) {
  const filterRef = useRef<HTMLDivElement>(null);

  const getValue = (handle: number) => {
    const value = parseInt((max / (trackWidth / handle)).toFixed(0), 10);
    return Math.ceil(value / unit) * unit;
  };

  const trackWidth: number = 600;
  const trackHeight = 16;
  const handleSize = 30;
  const minWidthBetweenHandle = handleSize * 2;

  const [minHandle, setMinHandle] = useState(
    defaultMin ? getValue(defaultMin) : 0
  );
  const [maxHandle, setMaxHandle] = useState(
    defaultMax ? getValue(defaultMax) : trackWidth
  );

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
    <RangeSliderBox>
      <input
        type="hidden"
        name={'min'}
        value={(max / (trackWidth / minHandle)).toFixed(0)}
      ></input>
      <input
        type="hidden"
        name={'max'}
        value={(max / (trackWidth / maxHandle)).toFixed(0)}
      ></input>
      <RangeLabel>
        {sliderMin}~{sliderMax === max ? '무제한' : sliderMax}
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
        />
      </SliderTrack>
    </RangeSliderBox>
  );
}

export default RangeSlider;

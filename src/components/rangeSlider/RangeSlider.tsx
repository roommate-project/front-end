import { useRef, useState } from 'react';
import {
  RangeLabel,
  RangeSliderBox,
  SliderTrack,
  ValueHandle,
} from 'components/rangeSlider/RangeSliderStyle';
import { useMediaQuery } from 'react-responsive';

interface ISliderProps {
  keyNum: number;
  max: number;
  unit: number;
  sliderMin: number[];
  sliderMax: (number | string)[];
  setSliderMin: React.Dispatch<React.SetStateAction<number[]>>;
  setSliderMax: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  defaultMin?: number;
  defaultMax?: number;
  index: string;
}

function RangeSlider({
  keyNum,
  max,
  unit,
  sliderMin,
  sliderMax,
  setSliderMin,
  setSliderMax,
  defaultMin,
  defaultMax,
  index,
}: ISliderProps) {
  const isMobile = useMediaQuery({ query: '(max-width:500px)' });
  const filterRef = useRef<HTMLDivElement>(null);

  onresize = () => {
    location.reload();
  };

  const getValue = (handle: number) => {
    const value = parseInt((max / (trackWidth / handle)).toFixed(0), 10);
    return Math.ceil(value / unit) * unit;
  };

  const handleSize = isMobile ? 26 : 30;
  const trackWidth = isMobile ? 340 : 600;
  const trackHeight = isMobile ? 10 : 16;

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
    const newValue = XminHandle > maxHandle ? maxHandle : XminHandle;
    setMinHandle(newValue < 0 ? 0 : Math.ceil(newValue / unit) * unit);
  };

  const onDragMaxHandler = (info: any) => {
    const XmaxHandle =
      info.point.x - filterRef.current!.getBoundingClientRect().left;
    const newValue =
      XmaxHandle > trackWidth
        ? trackWidth
        : XmaxHandle < minHandle
        ? minHandle
        : XmaxHandle;
    setMaxHandle(Math.ceil(newValue / unit) * unit);
  };

  return (
    <RangeSliderBox $trackWidth={trackWidth}>
      <input type="hidden" name={'min'} value={clibratedMinValue}></input>
      <input type="hidden" name={'max'} value={clibratedMaxValue}></input>
      <RangeLabel>
        {Number(getValue(minHandle)) === Number(getValue(maxHandle))
          ? null
          : Number(getValue(minHandle))}
        {Number(getValue(minHandle)) === Number(getValue(maxHandle))
          ? null
          : `${index} ~ `}
        {Number(getValue(maxHandle)) === max
          ? '무제한'
          : Number(getValue(maxHandle))}
        {Number(getValue(maxHandle)) === max ? null : index}
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
            setSliderMin([
              ...sliderMin.slice(0, keyNum),
              minValue,
              ...sliderMin.slice(1 + keyNum),
            ]);
          }}
          dragConstraints={{
            left: 0,
            right: maxHandle - handleSize,
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
            setSliderMax([
              ...sliderMax.slice(0, keyNum),
              maxValue === max ? '무제한' : maxValue,
              ...sliderMax.slice(1 + keyNum),
            ]);
          }}
          dragConstraints={{
            left: minHandle + handleSize,
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

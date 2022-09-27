import RangeSlider from 'components/rangeSlider/RangeSlider';
import { BtnBox } from 'design/commonStyles';
import {
  CheckBoxLabel,
  CheckBoxWrraper,
  FilterBox,
  FilterBtn,
  FilterModalContainer,
  MatchingRateSelect,
  SelectBoxWrraper,
  SliderFilterBox,
} from 'design/matchingStyles/MatchingFilterStyle';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  checkItemGender,
  checkItemHost,
  checkItemRoom,
  matchingRate,
  rangeData,
} from 'utils/filterData';

interface IMatchingfilterProps {
  setFilter: any;
}

function MatchingFilter({ setFilter }: IMatchingfilterProps) {
  const { register, handleSubmit, setValue } = useForm();
  const [isCheckGender, setIsCheckGender] = useState([true, true]);
  const [isCheckHost, setIsCheckHost] = useState([true, true]);
  const [isCheckRoom, setIsCheckRoom] = useState([true, true, true, true]);
  const [sliderMin, setSliderMin] = useState([0, 0, 0]);
  const [sliderMax, setSliderMax] = useState<(number | string)[]>([
    '무제한',
    '무제한',
    '무제한',
  ]);

  useEffect(() => {
    for (let i = 0; i < rangeData.length; i++) {
      setValue(`${rangeData[i].min}`, sliderMin[i]);
      setValue(`${rangeData[i].max}`, sliderMax[i]);
    }
  }, [sliderMin, sliderMax]);
  const navigation = useNavigate();

  const onValid = (data: any) => {
    console.log(data);
    setFilter({
      rate: data.matchingRate,
      gender:
        data.남자 && data.여자
          ? null
          : data.남자 && !data.여자
          ? 'male'
          : !data.남자 && data.여자
          ? 'female'
          : 0,
      wantLongMax: data.maxMonth === '무제한' ? null : data.maxMonth,
      wantLongMin: data.minMonth,
      ageMax: data.maxAge === '무제한' ? null : data.maxAge,
      ageMin: data.minAge,
      costMax: data.maxCost === '무제한' ? null : data.maxCost,
      costMin: data.minCost,
      room0: data.기숙사,
      room1: data.원룸,
      room2: data.투룸,
      room3: data.쓰리룸이상,
      room4:
        data['집 소유자만 보기'] && data['룸메이트만 보기']
          ? null
          : data['집 소유자만 보기'] && !data['룸메이트만 보기']
          ? false
          : !data['집 소유자만 보기'] && data['룸메이트만 보기']
          ? true
          : null,
    });
    navigation('/');
  };

  const genderCheckToggle = (index: number) => {
    setIsCheckGender([
      ...isCheckGender.slice(0, index),
      !isCheckGender[index],
      ...isCheckGender.slice(index + 1),
    ]);
  };

  const roomCheckToggle = (index: number) => {
    setIsCheckRoom([
      ...isCheckRoom.slice(0, index),
      !isCheckRoom[index],
      ...isCheckRoom.slice(index + 1),
    ]);
  };

  const hostCheckToggle = (index: number) => {
    setIsCheckHost([
      ...isCheckHost.slice(0, index),
      !isCheckHost[index],
      ...isCheckHost.slice(index + 1),
    ]);
  };

  return (
    <FilterModalContainer onSubmit={handleSubmit(onValid)}>
      <FilterBox>
        매칭률
        <SelectBoxWrraper>
          <MatchingRateSelect {...register('matchingRate')}>
            {matchingRate.map((value, index) => (
              <option value={value} key={index}>
                {value}%
              </option>
            ))}
          </MatchingRateSelect>
          <p>이상</p>
        </SelectBoxWrraper>
      </FilterBox>
      <SliderFilterBox>
        {rangeData.map((item, index) => (
          <div key={index}>
            {item.name}
            <RangeSlider
              keyNum={index}
              max={item.maxValue}
              unit={item.unit}
              sliderMin={sliderMin}
              sliderMax={sliderMax}
              setSliderMin={setSliderMin}
              setSliderMax={setSliderMax}
              index={item.index}
            />
            <input
              type="hidden"
              defaultValue={sliderMin[index]}
              {...register(`${item.min}`)}
            />
            <input
              type="hidden"
              defaultValue={sliderMax[index]}
              {...register(`${item.max}`)}
            />
          </div>
        ))}
      </SliderFilterBox>
      <FilterBox>
        성별
        <CheckBoxWrraper>
          {checkItemGender.map((item, index) => (
            <CheckBoxLabel
              key={index}
              htmlFor={item}
              isCheck={isCheckGender[index]}
            >
              {item}
              <input
                type="checkbox"
                key={index}
                id={item}
                {...register(`${item}`)}
                onChange={() => genderCheckToggle(index)}
                defaultChecked
              />
            </CheckBoxLabel>
          ))}
        </CheckBoxWrraper>
      </FilterBox>
      <FilterBox>
        주거형태
        <CheckBoxWrraper>
          {checkItemRoom.map((item, index) => (
            <CheckBoxLabel
              key={index}
              htmlFor={item}
              isCheck={isCheckRoom[index]}
            >
              {item}
              <input
                type="checkbox"
                key={index}
                id={item}
                {...register(`${item}`)}
                onChange={() => roomCheckToggle(index)}
                defaultChecked
              />
            </CheckBoxLabel>
          ))}
        </CheckBoxWrraper>
      </FilterBox>
      <FilterBox>
        주거보유 여부
        <CheckBoxWrraper>
          {checkItemHost.map((item, index) => (
            <CheckBoxLabel
              key={index}
              htmlFor={item}
              isCheck={isCheckHost[index]}
            >
              {item}
              <input
                type="checkbox"
                key={index}
                id={item}
                {...register(`${item}`)}
                onChange={() => hostCheckToggle(index)}
                defaultChecked
              />
            </CheckBoxLabel>
          ))}
        </CheckBoxWrraper>
      </FilterBox>
      <BtnBox>
        <FilterBtn>적용하기</FilterBtn>
      </BtnBox>
    </FilterModalContainer>
  );
}

export default MatchingFilter;

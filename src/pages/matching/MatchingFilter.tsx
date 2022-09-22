import RangeSlider from 'components/rangeSlider/RangeSlider';
import {
  CheckBoxLabel,
  CheckBoxWrraper,
  FilterBox,
  FilterBtn,
  FilterModalContainer,
  Select,
  SelectBoxWrraper,
  SliderFilterBox,
} from 'design/matchingStyles/MatchingFilterStyle';
import { BtnBox } from 'design/signupStyles/SignUpStyle';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  checkItemGender,
  checkItemRoom,
  matchingRate,
  rangeData,
} from 'utils/filterData';

interface IMatchingfilterProps {
  setFilter: any;
}

function MatchingFilter({ setFilter }: IMatchingfilterProps) {
  const { register, handleSubmit, setValue } = useForm();
  const [isCheckGender, setIsCheckGender] = useState([true, true, true]);
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
      room4: 0,
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

  return (
    <FilterModalContainer onSubmit={handleSubmit(onValid)}>
      <FilterBox>
        매칭률
        <SelectBoxWrraper>
          <Select {...register('matchingRate')}>
            {matchingRate.map((value, index) => (
              <option value={value} key={index}>
                {value}%
              </option>
            ))}
          </Select>
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
      <BtnBox>
        <FilterBtn>적용하기</FilterBtn>
      </BtnBox>
    </FilterModalContainer>
  );
}

export default MatchingFilter;

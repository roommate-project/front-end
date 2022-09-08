import { useMutation } from '@tanstack/react-query';
import { fetchMatchingFilter } from 'api/api';
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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function MatchingFilter() {
  const { register, handleSubmit, setValue } = useForm();
  const [isCheckGender, setIsCheckGender] = useState([true, true, true]);
  const [isCheckRoom, setIsCheckRoom] = useState([true, true, true, true]);
  const [sliderMin, setSliderMin] = useState([0, 0, 0]);
  const [sliderMax, setSliderMax] = useState<(number | string)[]>([
    '무제한',
    '무제한',
    '무제한',
  ]);

  const mutation = useMutation(fetchMatchingFilter);

  useEffect(() => {
    for (let i = 0; i < rangeData.length; i++) {
      setValue(`${rangeData[i].min}`, sliderMin[i]);
      setValue(`${rangeData[i].max}`, sliderMax[i]);
    }
  }, [sliderMin, sliderMax]);

  const onValid = (data: any) => {
    console.log(data);
    mutation.mutate(data);
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

  const checkItemGender = ['남자', '여자'];
  const checkItemRoom = ['기숙사', '원룸', '투룸', '쓰리룸이상'];
  const matchingRate = [...new Array(21)].map((_, i) => 5 * i);
  const rangeData = [
    {
      name: '거주기간',
      min: 'minMonth',
      max: 'maxMonth',
      maxValue: 25,
      unit: 1,
      index: ' 개월',
    },
    {
      name: '나이',
      min: 'minAge',
      max: 'maxAge',
      maxValue: 101,
      unit: 1,
      index: ' 세',
    },
    {
      name: '월세',
      min: 'minCost',
      max: 'maxCost',
      maxValue: 105,
      unit: 5,
      index: ' 만원',
    },
  ];

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

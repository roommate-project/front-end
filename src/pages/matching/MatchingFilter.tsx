import RangeSlider from 'components/rangeSlider/RangeSlider';
import {
  CheckBoxLabel,
  CheckBoxWrraper,
  FilterBox,
  FilterBtn,
  FilterModalContainer,
} from 'design/matchingStyles/MatchingFilterStyle';
import { BtnBox } from 'design/signupStyles/SignUpStyle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function MatchingFilter() {
  const { register, handleSubmit, setValue } = useForm();
  const [sliderMinMonth, setSliderMinMonth] = useState<number>(0);
  const [sliderMaxMonth, setSliderMaxMonth] = useState<number | string>(
    '무제한'
  );
  const [sliderMinAge, setSliderMinAge] = useState<number>(0);
  const [sliderMaxAge, setSliderMaxAge] = useState<number | string>('무제한');
  const [sliderMinCost, setSliderMinCost] = useState<number>(0);
  const [sliderMaxCost, setSliderMaxCost] = useState<number | string>('무제한');
  const [isCheckGender, setIsCheckGender] = useState([true, true, true]);
  const [isCheckRoom, setIsCheckRoom] = useState([true, true, true, true]);

  const onValid = (data: any) => {
    console.log('filter apply');
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

  const checkItemGender = ['남자', '여자', '기타'];
  const checkItemRoom = ['기숙사', '원룸', '투룸', '쓰리룸이상'];

  return (
    <FilterModalContainer onSubmit={handleSubmit(onValid)}>
      <FilterBox>매칭률</FilterBox>
      <FilterBox>
        거주기간
        <RangeSlider
          max={25}
          unit={1}
          setSliderMin={setSliderMinMonth}
          setSliderMax={setSliderMaxMonth}
          index={' 개월'}
        />
        <input
          type="hidden"
          defaultValue={sliderMinMonth}
          {...register('minMonth')}
          onChange={setValue('minMonth', sliderMinMonth)}
        />
        <input
          type="hidden"
          defaultValue={sliderMaxMonth}
          {...register('maxMonth')}
          onChange={setValue('maxMonth', sliderMaxMonth)}
        />
      </FilterBox>
      <FilterBox>
        나이
        <RangeSlider
          max={101}
          unit={1}
          setSliderMin={setSliderMinAge}
          setSliderMax={setSliderMaxAge}
          index={' 세'}
        />
        <input
          type="hidden"
          defaultValue={sliderMinAge}
          {...register('minAge')}
          onChange={setValue('minAge', sliderMinAge)}
        />
        <input
          type="hidden"
          defaultValue={sliderMaxAge}
          {...register('maxAge')}
          onChange={setValue('maxAge', sliderMaxAge)}
        />
      </FilterBox>
      <FilterBox>
        월세
        <RangeSlider
          max={105}
          unit={5}
          setSliderMin={setSliderMinCost}
          setSliderMax={setSliderMaxCost}
          index={' 만원'}
        />
        <input
          type="hidden"
          defaultValue={sliderMinCost}
          {...register('minCost')}
          onChange={setValue('minCost', sliderMinCost)}
        />
        <input
          type="hidden"
          defaultValue={sliderMaxCost}
          {...register('maxCost')}
          onChange={setValue('maxCost', sliderMaxCost)}
        />
      </FilterBox>
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

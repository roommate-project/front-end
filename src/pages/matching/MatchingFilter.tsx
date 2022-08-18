import RangeSlider from 'components/rangeSlider/RangeSlider';
import {
  FilterBox,
  FilterBtn,
  FilterModalContainer,
} from 'design/matchingStyles/MatchingFilterStyle';
import { BtnBox } from 'design/signupStyles/SignUpStyle';
import { useState } from 'react';

function MatchingFilter() {
  const [sliderMin, setSliderMin] = useState<number>(0);
  const [sliderMax, setSliderMax] = useState<number | string>('무제한');
  const filterApply = () => {
    console.log('apply');
  };
  return (
    <FilterModalContainer>
      <FilterBox>매칭률</FilterBox>
      <FilterBox>거주기간</FilterBox>
      <FilterBox>
        나이
        <RangeSlider
          max={100}
          unit={5}
          sliderMin={sliderMin}
          sliderMax={sliderMax}
          setSliderMin={setSliderMin}
          setSliderMax={setSliderMax}
        />
        <input type="hidden" name={'min'} defaultValue={sliderMin} />
        <input type="hidden" name={'max'} defaultValue={sliderMax} />
      </FilterBox>
      <FilterBox>금액</FilterBox>
      <FilterBox>성별</FilterBox>
      <FilterBox>주거형태</FilterBox>
      <BtnBox>
        <FilterBtn onClick={filterApply}>적용하기</FilterBtn>
      </BtnBox>
    </FilterModalContainer>
  );
}

export default MatchingFilter;

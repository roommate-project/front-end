import { DetailImgWrapper } from 'design/mathingDetailStyles/matchingDetailStyles';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MyIntroduceBackground,
  MyIntroducePutButton,
  MyIntroduceRowBox,
  MyIntroduceTextArea,
  MyIntroduceTitle,
  MyIntroduceContentTitle,
  MyIntroduceContent,
  MyIntroduceOptionBox,
  MyIntroduceSelectBox,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const roomCount = [...new Array(4)].map((_, i) => i + 1);
const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);

type myHouseInfoProps = {
  houseInfo: {
    roomCount: number;
    cost: number;
    houseDescription: string;
  };
  photoUrls: Array<String>;
};

function MyHouseIntroduce({ houseInfo, photoUrls }: myHouseInfoProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <MyIntroduceBackground>
      <MyIntroduceTitle>집 소개</MyIntroduceTitle>
      <MyIntroduceContentTitle>집 상세 정보</MyIntroduceContentTitle>
      {/* TODO 기숙사일때 문구 변경해주기 */}
      <MyIntroduceContent>
        저희 집은 방이{' '}
        <MyIntroduceSelectBox
          name="period"
          id="period"
          defaultValue={houseInfo.roomCount}
        >
          {roomCount.map(roomCount => (
            <MyIntroduceOptionBox value={roomCount} key={roomCount}>
              {roomCount < 4 ? `${roomCount}개` : '3개 이상'}
            </MyIntroduceOptionBox>
          ))}{' '}
        </MyIntroduceSelectBox>
        있습니다.
      </MyIntroduceContent>
      <MyIntroduceContent>
        월세는{' '}
        <MyIntroduceSelectBox
          name="period"
          id="period"
          defaultValue={parseInt((houseInfo.cost / 10000).toString())}
        >
          {costRange.map(costRange => (
            <MyIntroduceOptionBox value={costRange} key={costRange}>
              {costRange < 100000000 ? `${costRange} 만원` : '100만원 이상'}
            </MyIntroduceOptionBox>
          ))}{' '}
        </MyIntroduceSelectBox>
        대 입니다.
      </MyIntroduceContent>
      <MyIntroduceContentTitle>
        집 사진 <MyIntroducePutButton icon={faPencil} />
      </MyIntroduceContentTitle>
      {/* TODO 이미지 크기 수정하기 */}
      <DetailImgWrapper>
        <Slider {...settings}>
          {photoUrls.map(photo => (
            <div>
              <img
                src={photo.toString()}
                key={photo.toString()}
                style={{ width: '100%', height: '300px' }}
              />
            </div>
          ))}
        </Slider>
      </DetailImgWrapper>
      <MyIntroduceRowBox>
        <MyIntroduceContentTitle>
          집 소개
          <MyIntroducePutButton icon={faFloppyDisk} />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>
      <MyIntroduceTextArea
        defaultValue={houseInfo.houseDescription}
        name="houseInfo"
        id="houseInfo"
      />
    </MyIntroduceBackground>
  );
}

export default MyHouseIntroduce;

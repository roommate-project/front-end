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

const roomCount = [...new Array(4)].map((_, i) => i + 1);

const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);

const dummyHouseInfo = {
  roomCount: 2,
  cost: 200000,
  domitory: null,
  photoUrls: [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
    'https://picsum.photos/800/600?random=4',
  ],
  houseDescription:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo doloremque repellat. Distinctio adipisci maxime rem obcaecati saepe doloremque labore dolores, et temporibus sapiente doloribus, quo deleniti, excepturi cum laudantium.',
};

function MyHouseIntroduce() {
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

      <MyIntroduceContent>
        저희 집은 방이{' '}
        <MyIntroduceSelectBox
          name="period"
          id="period"
          defaultValue={dummyHouseInfo.roomCount}
        >
          {roomCount.map(roomCount => (
            <MyIntroduceOptionBox value={roomCount}>
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
          defaultValue={parseInt((dummyHouseInfo.cost / 10000).toString())}
        >
          {costRange.map(costRange => (
            <MyIntroduceOptionBox value={costRange}>
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
          {dummyHouseInfo.photoUrls.map((photo, index) => (
            <div>
              <img
                src={photo}
                key={index}
                style={{ width: '100%', height: '300px' }}
              />
            </div>
          ))}
        </Slider>
      </DetailImgWrapper>
      <MyIntroduceRowBox>
        <MyIntroduceContentTitle>
          집 소개
          <MyIntroducePutButton icon={faPencil} />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>
      <MyIntroduceTextArea
        defaultValue={dummyHouseInfo.houseDescription}
        name="houseInfo"
        id="houseInfo"
      />
    </MyIntroduceBackground>
  );
}

export default MyHouseIntroduce;

import {
  DetailImg,
  DetailImgWrapper,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photoUrls = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
];

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: '10px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p> 집 소개</p>
        <button>수정</button>
      </div>
      {/* TODO 이미지 크기 수정하기 */}
      <DetailImgWrapper>
        <Slider {...settings}>
          {photoUrls.map((photo, index) => (
            <div>
              <DetailImg src={photo} width="100%" key={index} />
            </div>
          ))}
        </Slider>
      </DetailImgWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          marginTop: '20px',
        }}
      >
        <p>집 특징</p>
        <textarea
          name="houseInfo"
          id="houseInfo"
          style={{
            width: '60%',
            height: '100px',
            borderRadius: '10px',
            padding: '5px',
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  );
}

export default MyHouseIntroduce;

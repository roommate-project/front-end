import { DetailImgWrapper } from 'design/mathingDetailStyles/matchingDetailStyles';
import React, { useState, useEffect } from 'react';
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
import { faFloppyDisk, faPen } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { putUserDatas } from '../../api/mypageApi';

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
  const [editHouseDescription, setEditHouseDescription] = useState(true);
  const [houseData, setHouseData] = useState({
    cost: houseInfo.cost.toString(),
    roomCount: houseInfo.roomCount.toString(),
    houseInfo: houseInfo.houseDescription,
  });

  useEffect(() => {
    console.log(houseData);
  }, [houseData]);

  const houseDataMutation = useMutation(putUserDatas, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('정보 수정 완료');
      }
    },
  });

  const saveHouseDatas = () => {
    houseDataMutation.mutate(houseData);
    setEditHouseDescription(true);
  };

  const onChangeDatas = (e: any, type: string) => {
    setHouseData({
      ...houseData,
      [e.target.name]: e.target.value.toString(),
    });
    if (type !== 'text') {
      saveHouseDatas();
    }
  };

  return (
    <MyIntroduceBackground>
      <MyIntroduceTitle>집 소개</MyIntroduceTitle>
      <MyIntroduceContentTitle>집 상세 정보</MyIntroduceContentTitle>
      {/* TODO 기숙사일때 문구 변경해주기 */}
      <MyIntroduceContent>
        저희 집은 방이{' '}
        <MyIntroduceSelectBox
          name="roomCount"
          defaultValue={houseInfo.roomCount}
          onChange={e => {
            onChangeDatas(e, 'select');
          }}
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
          name="cost"
          defaultValue={parseInt((houseInfo.cost / 10000).toString())}
          onChange={e => {
            onChangeDatas(e, 'select');
          }}
        >
          {costRange.map(costRange => (
            <MyIntroduceOptionBox value={costRange * 10000} key={costRange}>
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
          <MyIntroducePutButton
            icon={editHouseDescription ? faPen : faFloppyDisk}
            onClick={() => {
              editHouseDescription
                ? setEditHouseDescription(false)
                : saveHouseDatas();
            }}
          />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>
      <MyIntroduceTextArea
        defaultValue={houseInfo.houseDescription}
        name="houseInfo"
        id="houseInfo"
        disabled={editHouseDescription}
        onChange={e => {
          onChangeDatas(e, 'text');
        }}
      />
    </MyIntroduceBackground>
  );
}

export default MyHouseIntroduce;

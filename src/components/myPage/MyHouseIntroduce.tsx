import {
  DetailImgWrapper,
  ImageDeleteBtn,
  MypageHouseImage,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MyIntroduceBackground,
  MyIntroducePutButton,
  MyIntroduceRowBox,
  MyIntroduceTextArea,
  MyIntroduceContentTitle,
  MyIntroduceContent,
  MyIntroduceOptionBox,
  MyIntroduceSelectBox,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import {
  faFloppyDisk,
  faPen,
  faCircleXmark,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import {
  deleteHousePhoto,
  postUserHousePhotos,
  putUserDatas,
} from 'api/mypageApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let roomCount = [...new Array(4)].map((_, i) => i + 1);

const costRange = [...new Array(10)].map((_, i) => (i + 1) * 10);

type myHouseInfoProps = {
  houseInfo: {
    roomCount: number;
    cost: number;
    houseDescription: string;
    restImagesId: Array<number>;
  };
};

function MyHouseIntroduce({ houseInfo }: myHouseInfoProps) {
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
  const [housePhotoId, setHousePhotoId] = useState(houseInfo.restImagesId);

  const houseDataMutation = useMutation(putUserDatas, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('정보 수정 완료');
      }
    },
  });

  const housePhotoDeleteMutation = useMutation(deleteHousePhoto, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('사진 삭제 완료');
      }
    },
  });

  const housePhotoPostMutation = useMutation(postUserHousePhotos, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('사진 등록 완료');
      }
    },
  });

  const removeHousePhoto = (photoId: number) => {
    setHousePhotoId(housePhotoId.filter(photo => photo !== photoId));
    housePhotoDeleteMutation.mutate(photoId);
  };
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

  const handleImageUpload = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    housePhotoPostMutation.mutate(e.target.files[0]);
  };

  return (
    <MyIntroduceBackground>
      <MyIntroduceContentTitle>집 상세 정보</MyIntroduceContentTitle>
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
        집 사진
        <label htmlFor="housePhohtos">
          <MyIntroducePutButton icon={faCirclePlus} />
        </label>
        <input
          type="file"
          name="housePhohtos"
          id="housePhohtos"
          style={{
            width: 0,
            height: 0,
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: 0,
          }}
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={handleImageUpload}
        />
      </MyIntroduceContentTitle>
      <DetailImgWrapper>
        <Slider {...settings}>
          {houseInfo.restImagesId.map(photo => (
            <div key={photo.toString()}>
              <MypageHouseImage
                src={`${
                  process.env.REACT_APP_SERVER_IP
                }/api/user/${sessionStorage.getItem(
                  'userId'
                )}/img/rest/${photo}`}
              />
              <ImageDeleteBtn>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => {
                    removeHousePhoto(photo);
                  }}
                />
              </ImageDeleteBtn>
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

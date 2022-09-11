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
import {
  faFloppyDisk,
  faPen,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import {
  putHousePhoto,
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

  const housePhotoDeleteMutation = useMutation(putHousePhoto, {
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
    housePhotoDeleteMutation.mutate([photoId]);
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

  const [houseImgs, setHouseImgs] = useState([]);
  const handleImageUpload = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    const fileArr = e.target.files;

    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
    }
    setHouseImgs(file);
    housePhotoPostMutation.mutate(houseImgs);
  };

  useEffect(() => {
    console.log(housePhotoId);
  }, [housePhotoId]);

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
        집 사진
        <label htmlFor="housePhohtos">
          <MyIntroducePutButton icon={faPencil} />
        </label>
        <input
          type="file"
          multiple
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
      {/* TODO 이미지 크기 수정하기 */}
      {/* <p>선택 사진 미리보기</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {detailImgs.map(photo => {
          return (
            <img
              src={photo}
              style={{
                backgroundSize: 'cover',
                width: '10rem',
                height: '10rem',
              }}
            />
          );
        })}
      </div> */}
      <DetailImgWrapper>
        <Slider {...settings}>
          {houseInfo.restImagesId.map(photo => (
            <div>
              <img
                src={`${
                  process.env.REACT_APP_SERVER_IP
                }/api/user/${sessionStorage.getItem(
                  'userId'
                )}/img/rest/${photo}`}
                key={photo.toString()}
                style={{ width: '100%', height: '300px' }}
              />
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => {
                  removeHousePhoto(photo);
                }}
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

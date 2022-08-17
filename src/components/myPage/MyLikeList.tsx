import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  MyLikeListGridBox,
  MyLikeListBox,
  MyLikeListHeartButton,
  MyLikeListImg,
  MyLikeListInfo,
} from 'design/myPageStyles/myLikeListStyles';

const dummyLikeListData = [
  {
    representImage: 'https://picsum.photos/800/600?random=1',
    location: '마포구',
    questionPercent: 16.67,
    userId: 13,
    periodLivingTogether: 6,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=2',
    location: '마포구',
    questionPercent: 100,
    userId: 16,
    periodLivingTogether: 10,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=3',
    location: '동작구',
    questionPercent: 99,
    userId: 75,
    periodLivingTogether: 17,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=4',
    location: '송파구',
    questionPercent: 13.33,
    userId: 18,
    periodLivingTogether: 0,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=1',
    location: '마포구',
    questionPercent: 16.67,
    userId: 13,
    periodLivingTogether: 6,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=2',
    location: '마포구',
    questionPercent: 100,
    userId: 16,
    periodLivingTogether: 10,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=3',
    location: '동작구',
    questionPercent: 99,
    userId: 75,
    periodLivingTogether: 17,
  },
  {
    representImage: 'https://picsum.photos/800/600?random=4',
    location: '송파구',
    questionPercent: 13.33,
    userId: 18,
    periodLivingTogether: 0,
  },
];

function MyLikeList() {
  return (
    <MyLikeListGridBox len={dummyLikeListData.length}>
      {dummyLikeListData.map(list => (
        <MyLikeListBox key={list.representImage}>
          <MyLikeListImg
            src={list.representImage}
            alt="대표 이미지"
            style={{
              width: '100%',
              height: '140px',
            }}
          />
          <MyLikeListHeartButton icon={faHeart} />
          <MyLikeListInfo>
            {list.location} | {list.periodLivingTogether}개월 |{' '}
            {list.questionPercent}%
          </MyLikeListInfo>
        </MyLikeListBox>
      ))}
    </MyLikeListGridBox>
  );
}

export default MyLikeList;

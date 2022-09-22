import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  MyLikeListGridBox,
  MyLikeListBox,
  MyLikeListHeartButton,
  MyLikeListImg,
  MyLikeListInfo,
} from 'design/myPageStyles/MyLikeListStyles';
import { useMutation } from '@tanstack/react-query';
import { postUserLikeButton } from 'api/mypageApi';
import { Link } from 'react-router-dom';

type myLikeListProp = {
  likeList: Array<any>;
};

function MyLikeList({ likeList }: myLikeListProp) {
  console.log(likeList);
  const likeMutation = useMutation(postUserLikeButton, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('좋아요 취소');
      }
    },
  });

  if (likeList.length == 0) {
    return (
      <div
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
        }}
      >
        아직 좋아요한 목록이 없어요!
      </div>
    );
  }
  return (
    <MyLikeListGridBox len={likeList.length / 2}>
      {likeList.map(list => (
        <Link to={`/matching/detail/${list.userId}`}>
          <MyLikeListBox key={list.representImage}>
            <MyLikeListImg
              src={`${process.env.REACT_APP_SERVER_IP}/api/user/${list.userId}/img/rest/${list.firstHomeImageId}`}
              alt="대표 이미지"
              style={{
                width: '100%',
                height: '140px',
              }}
            />
            <MyLikeListHeartButton
              icon={faHeart}
              onClick={() => {
                likeMutation.mutate(list.userId);
              }}
            />
            <MyLikeListInfo>
              {list.location} | {list.want_long}개월 | {list.questionPercent}%
            </MyLikeListInfo>
          </MyLikeListBox>
        </Link>
      ))}
    </MyLikeListGridBox>
  );
}

export default MyLikeList;

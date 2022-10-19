import React, { useRef } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  MyLikeListGridBox,
  MyLikeListBox,
  MyLikeListHeartButton,
  MyLikeListImg,
  MyLikeListInfo,
  EmptyLikeList,
} from 'design/myPageStyles/MyLikeListStyles';
import { useMutation } from '@tanstack/react-query';
import { postUserLikeButton } from 'api/mypageApi';
import { useNavigate } from 'react-router-dom';

type myLikeListProp = {
  likeList: Array<any>;
};

function MyLikeList({ likeList }: myLikeListProp) {
  const likeRef = useRef<HTMLDivElement>(null);
  const navigation = useNavigate();
  const likeMutation = useMutation(postUserLikeButton, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('좋아요 취소');
      }
    },
  });

  if (likeList.length === 0) {
    return <EmptyLikeList>아직 좋아요한 목록이 없어요!</EmptyLikeList>;
  }

  const lookDetailHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    userId: number
  ) => {
    if (!likeRef.current!.contains(event.target as HTMLButtonElement)) {
      navigation(`/matching/detail/${userId}`);
    }
  };

  return (
    <MyLikeListGridBox len={likeList.length / 2}>
      {likeList.map((list, index) => (
        <MyLikeListBox
          key={list.representImage + index}
          onClick={event => lookDetailHandler(event, list.userId)}
        >
          <MyLikeListImg
            src={`${process.env.REACT_APP_SERVER_IP}/api/user/${list.userId}/img/represents`}
            alt="대표 이미지"
          />
          <div ref={likeRef}>
            <MyLikeListHeartButton
              icon={faHeart}
              onClick={() => {
                likeMutation.mutate(list.userId);
              }}
            />
          </div>
          <MyLikeListInfo>
            {list.location} | 매칭률 {list.questionPercent}%
          </MyLikeListInfo>
        </MyLikeListBox>
      ))}
    </MyLikeListGridBox>
  );
}

export default MyLikeList;

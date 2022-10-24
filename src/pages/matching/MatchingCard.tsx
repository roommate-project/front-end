import React, { useRef, useState } from 'react';
import { PanInfo, useAnimation, useMotionValue } from 'framer-motion';
import {
  MatchingCircleBtn,
  MatchingCircleBtnBox,
  MatchingImgContainer,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import MatchingCardInfo from './MatchingCardInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMatchingLike } from 'api/matchingApi';
import { useNavigate } from 'react-router-dom';
import { postCreateChatRoom } from 'api/chatApi';

interface IMachingCardProps {
  onMove: any;
  children: any;
  fetchData: any;
  fetchNextPage: any;
}

function MachingCard({ onMove, fetchData, fetchNextPage }: IMachingCardProps) {
  const cardRef = useRef(null);
  const likeButtonRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [direction, setDirection] = useState<string | undefined>();
  const [velocity, setVelocity] = useState(0);
  const navigation = useNavigate();
  const queryClient = useQueryClient();

  const LikeMutation = useMutation(fetchMatchingLike, {
    onSuccess: () => queryClient.invalidateQueries(['matchingPageData']),
    onError: error => alert(error),
  });

  const ChatMutation = useMutation(postCreateChatRoom, {
    onSuccess: data => navigation(`/chat-list/chat/${data.data.roomId}`),
    onError: error => alert(error),
  });

  const getDirection = () => {
    return velocity >= 1 ? 'right' : velocity <= -1 ? 'left' : undefined;
  };

  const onDragHandler = (info: PanInfo) => {
    setVelocity(info.velocity.x);
    setDirection(getDirection());
  };

  const onDragEndHandler = () => {
    if (direction && Math.abs(velocity) > 500) {
      onMove(direction);
      if (fetchData.isLast === true && direction === 'left') {
        fetchNextPage();
        fetchData.isLast = false;
      }
    }
  };

  const chatRequestHandler = () => {
    const usersId = {
      senderId: sessionStorage.getItem('userId'),
      receiverId: fetchData.userId,
    };
    ChatMutation.mutate(usersId);
  };

  const likeHandler = () => {
    LikeMutation.mutate(fetchData.userId + '');
  };

  const lookDetailHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      !chatButtonRef.current!.contains(event.target as HTMLButtonElement) &&
      !likeButtonRef.current!.contains(event.target as HTMLButtonElement)
    ) {
      navigation(`/matching/detail/${fetchData.userId}`);
    }
  };

  return (
    <MatchingImgContainer
      ref={cardRef}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={1}
      onDrag={(_, info) => onDragHandler(info)}
      onDragEnd={() => onDragEndHandler()}
      whileTap={{ scale: 1.05 }}
      style={{ x }}
      animate={controls}
      $bgImage={`${process.env.REACT_APP_SERVER_IP}/api/user/${fetchData.userId}/img/represents`}
      onDoubleClick={event => lookDetailHandler(event)}
    >
      <MatchingCardInfo data={fetchData} />
      <MatchingCircleBtnBox>
        <MatchingCircleBtn
          types="chat"
          onClick={chatRequestHandler}
          ref={chatButtonRef}
        >
          <FontAwesomeIcon icon={faComment} />
        </MatchingCircleBtn>
        <MatchingCircleBtn
          types="like"
          $isLike={fetchData.isLiked}
          onClick={likeHandler}
          ref={likeButtonRef}
        >
          <FontAwesomeIcon icon={faHeart} />
        </MatchingCircleBtn>
      </MatchingCircleBtnBox>
    </MatchingImgContainer>
  );
}

export default MachingCard;

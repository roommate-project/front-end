import React, { useRef, useState } from 'react';
import { PanInfo, useAnimation, useMotionValue } from 'framer-motion';
import {
  MatchingCircle,
  MatchingCircleBox,
  MatchingImgContainer,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import MatchingCardInfo from './MatchingCardInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMatchingLike } from 'api/api';
import { useNavigate } from 'react-router-dom';

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

  const mutation = useMutation(fetchMatchingLike, {
    onSuccess: () => queryClient.invalidateQueries(['matchingPageData']),
    onError: error => console.log(error),
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
    console.log('chat');
  };

  const likeHandler = () => {
    mutation.mutate(fetchData.userId + '');
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
      onClick={event => lookDetailHandler(event)}
    >
      <MatchingCardInfo data={fetchData} />
      <MatchingCircleBox>
        <MatchingCircle
          types="chat"
          onClick={chatRequestHandler}
          ref={chatButtonRef}
        >
          <FontAwesomeIcon icon={faComment} />
        </MatchingCircle>
        <MatchingCircle
          types="like"
          $isLike={fetchData.isLiked}
          onClick={likeHandler}
          ref={likeButtonRef}
        >
          <FontAwesomeIcon icon={faHeart} />
        </MatchingCircle>
      </MatchingCircleBox>
    </MatchingImgContainer>
  );
}

export default MachingCard;

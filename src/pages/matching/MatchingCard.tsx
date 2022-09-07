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
import { useMutation } from '@tanstack/react-query';
import { fetchMatchingLike } from 'api/api';

interface IMachingCardProps {
  onMove: any;
  children: any;
  fetchData: any;
}

function MachingCard({ onMove, fetchData, testImg }: IMachingCardProps) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [direction, setDirection] = useState<string | undefined>();
  const [velocity, setVelocity] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const mutation = useMutation(fetchMatchingLike, {
    onSuccess: () => setIsLike(prev => !prev),
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
    }
  };

  const chatRequestHandler = () => {
    console.log('chat');
  };

  const likeHandler = () => {
    mutation.mutate(fetchData.userId + '');
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
      $bgImage={fetchData.representImage}
    >
      <MatchingCardInfo data={fetchData} />
      <MatchingCircleBox>
        <MatchingCircle types="chat" onClick={chatRequestHandler}>
          <FontAwesomeIcon icon={faComment} />
        </MatchingCircle>
        <MatchingCircle types="like" $isLike={isLike} onClick={likeHandler}>
          <FontAwesomeIcon icon={faHeart} />
        </MatchingCircle>
      </MatchingCircleBox>
    </MatchingImgContainer>
  );
}

export default MachingCard;

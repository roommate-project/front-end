import React, { useState } from 'react';
import {
  MatchingCircle,
  MatchingCircleBox,
  MatchingImgContainer,
  MatchingInfoBox,
  MatchinglocationInfo,
  MatchingUserInfo,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faLocationDot,
  /*   faMars,
  faVenus, */
} from '@fortawesome/free-solid-svg-icons';
import { useMotionValue } from 'framer-motion';

function MachingImgCard({ children }: any) {
  const x = useMotionValue(0);
  const [constraint, setConstraint] = useState(true);
  const [direction, setDirection] = useState<string | undefined>();
  const [velocity, setVelocity] = useState(0);
  //dragend는 마우스에서 붙잡고 있다가 놓는 순간임

  const getDirection = () => {
    return velocity > 0 ? 'right' : velocity < 0 ? 'left' : undefined;
  };

  const onDragHandler = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
    console.log(direction, velocity);
  };

  const onDragEndHandler = () => {
    if (direction && Math.abs(velocity) > 500) {
      setConstraint(false);
    }
  };

  return (
    <MatchingImgContainer
      drag
      dragConstraints={constraint && { top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={1}
      onDrag={onDragHandler}
      onDragEnd={() => onDragEndHandler()}
      whileTap={{ scale: 1.05 }}
      style={{ x }}
    >
      <MatchingInfoBox>
        <MatchingUserInfo>
          {/*             {data.gender === 'male' ? (
          <FontAwesomeIcon icon={faMars} />
        ) : (
          <FontAwesomeIcon icon={faVenus} />
        )} */}
          <h1>귀요미, 24</h1>
          <p>"깨끗한 사람 같이 살아요"</p>
        </MatchingUserInfo>
        <MatchinglocationInfo>
          <FontAwesomeIcon icon={faLocationDot} />
          도봉구
        </MatchinglocationInfo>
      </MatchingInfoBox>
      <MatchingCircleBox>
        <MatchingCircle types="chat">
          <FontAwesomeIcon icon={faComment} />
        </MatchingCircle>
        <MatchingCircle types="like">
          <FontAwesomeIcon icon={faHeart} />
        </MatchingCircle>
      </MatchingCircleBox>
      {children}
    </MatchingImgContainer>
  );
}

export default MachingImgCard;

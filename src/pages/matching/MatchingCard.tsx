import React, { useRef, useState } from 'react';
import { PanInfo, useAnimation, useMotionValue } from 'framer-motion';
import { MatchingImgContainer } from 'design/matchingStyles/MatchingPageStyles';

function MachingCard({ onMove, children }: any) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [direction, setDirection] = useState<string | undefined>();
  const [velocity, setVelocity] = useState(0);

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
    >
      {children}
    </MatchingImgContainer>
  );
}

export default MachingCard;

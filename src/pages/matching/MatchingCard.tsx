import React, { useEffect, useRef, useState } from 'react';
import { PanInfo, useAnimation, useMotionValue } from 'framer-motion';
import { MatchingImgContainer } from 'design/matchingStyles/MatchingPageStyles';

function MachingCard({ onMove, children }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [constraint, setConstraint] = useState(true);
  const [direction, setDirection] = useState<string | undefined>();
  const [velocity, setVelocity] = useState(0);

  const getMove = (childNode: HTMLElement, parentNode: HTMLElement) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    let result =
      parentRect.left >= childRect.right
        ? false
        : //오른쪽 밖으로 나가면
        parentRect.right <= childRect.left
        ? true
        : undefined;
    return result;
  };

  const getDirection = () => {
    return velocity >= 1 ? 'right' : velocity <= -1 ? 'left' : undefined;
  };

  const onDragHandler = (info: PanInfo) => {
    setVelocity(info.velocity.x);
    setDirection(getDirection());
    //속도 넘어가면 날아가는게 아니라(콘스트레인트를 푸는게아니라), 배열순서가 바뀌도록 변경
  };

  const onDragEndHandler = () => {
    const DragEndDistance = (direction: string) => {
      if (cardRef.current && cardRef.current.parentElement !== null) {
        const parentWidth =
          cardRef.current.parentElement.getBoundingClientRect().width;
        const childWidth = cardRef.current.getBoundingClientRect().width;
        return direction === 'left'
          ? -parentWidth / 2 - childWidth / 2
          : parentWidth / 2 + childWidth / 2;
      }
    };
    if (direction && Math.abs(velocity) > 500) {
      setConstraint(false);
      controls.start({ x: DragEndDistance(direction) });
    }
  };

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      if (cardRef.current && cardRef.current.parentElement !== null) {
        const childNode = cardRef.current;
        const parentNode = cardRef.current.parentElement;
        const result = getMove(childNode, parentNode);
        result !== undefined && onMove(result);
      }
    });
    return () => unsubscribeX();
  });

  return (
    <MatchingImgContainer
      ref={cardRef}
      drag
      dragConstraints={constraint && { top: 0, right: 0, bottom: 0, left: 0 }}
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

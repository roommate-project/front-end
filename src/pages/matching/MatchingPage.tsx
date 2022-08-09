import React, { useRef } from 'react';
import { PageContainer } from 'design/commonStyles';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingImgCard from './MatchingImgCard';

function MatchingPage() {
  const array = [0, 1, 2, 3, 4];
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <PageContainer>
      <MachingCardWrapper ref={cardRef}>
        {array.map(index => (
          <MachingImgCard key={index}>{index}</MachingImgCard>
        ))}
      </MachingCardWrapper>
    </PageContainer>
  );
}

export default MatchingPage;

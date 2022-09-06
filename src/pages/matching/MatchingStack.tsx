import React from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';
import { useQuery } from '@tanstack/react-query';
import { fetchMatchingData } from 'api/api';

function MatchingStack({ children }: any) {
  const { data, isLoading } = useQuery(['matchingData'], fetchMatchingData, {
    onSuccess: () => {
      let fetchArray = data?.data;
    },
  });

  const handleMove = (direction: string | undefined) => {
    if (direction === 'left') {
      const arrayCopy = [...fetchArray];
      const topCard = arrayCopy.length - 1;
      const removedCard = arrayCopy.splice(topCard, 1);
      arrayCopy.splice(0, 0, ...removedCard);
      console.log(arrayCopy);
      return arrayCopy;
    } else if (direction === 'right') {
      const arrayCopy = [...fetchArray];
      const topCard = arrayCopy.length - 1;
      const removedCard = arrayCopy.splice(0, 1);
      arrayCopy.splice(topCard, 0, ...removedCard);
      return arrayCopy;
    }
  };

  return (
    <MachingCardWrapper>
      {!isLoading &&
        fetchArray.map((_, index) => {
          return (
            <MachingCard
              key={index}
              onMove={(direction: string | undefined) => handleMove(direction)}
            >
              {children}
              {index}
            </MachingCard>
          );
        })}
    </MachingCardWrapper>
  );
}

export default MatchingStack;

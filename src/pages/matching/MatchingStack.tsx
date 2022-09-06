import React, { useState } from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';
import { fetchMatchingData } from 'api/api';
import { useQuery } from '@tanstack/react-query';

function MatchingStack({ children }: any) {
  const [array, setArray] = useState<Array<any>>([]);
  const { isLoading } = useQuery(['matchingData'], fetchMatchingData, {
    onSuccess: data => {
      setArray(data.data);
    },
    refetchOnWindowFocus: false,
  });

  const handleMove = (direction: string | undefined) => {
    if (direction === 'left') {
      setArray(originArray => {
        const arrayCopy = [...originArray];
        const topCard = arrayCopy.length - 1;
        const removedCard = arrayCopy.splice(topCard, 1);
        arrayCopy.splice(0, 0, ...removedCard);
        return arrayCopy;
      });
    } else if (direction === 'right') {
      setArray(originArray => {
        const arrayCopy = [...originArray];
        const topCard = arrayCopy.length - 1;
        const removedCard = arrayCopy.splice(0, 1);
        arrayCopy.splice(topCard, 0, ...removedCard);
        return arrayCopy;
      });
    }
  };

  return (
    <MachingCardWrapper>
      {isLoading ? (
        <p>LOADING....</p>
      ) : (
        array.map(data => {
          return (
            <MachingCard
              key={data.userId}
              onMove={(direction: string | undefined) => handleMove(direction)}
              fetchData={data}
            >
              {children}
            </MachingCard>
          );
        })
      )}
    </MachingCardWrapper>
  );
}

export default MatchingStack;

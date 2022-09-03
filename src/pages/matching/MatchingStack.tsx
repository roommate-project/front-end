import React, { useState } from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';

function MatchingStack({ children }: any) {
  const [array, setArray] = useState([0, 1, 2, 3, 4]);

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
      {array.map(index => {
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

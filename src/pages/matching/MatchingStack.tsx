import React, { useState } from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';

function MatchingStack({ onMove, children }: any) {
  const [array, setArray] = useState([0, 1, 2, 3, 4]);

  //오른쪽으로 스와이프하면 다음사진 : 첫번째 카드를 맨뒤로 [0,1,2,3,4] => [1,2,3,4,0]
  //왼쪽으로 스와이프하면 이전사진 : 맨뒤 카드를 맨 앞으로 [1,2,3,4,0] => [0,1,2,3,4]

  //제일 위에있는 카드는 배열의 맨 마지막임 array[array.length-1]

  const handleMove = (result: boolean, index: number) => {
    setArray(originArray => {
      const arrayCopy = [...originArray];
      const lastIndex = arrayCopy.length - 1;
      //제거된 카드
      const removedCard = arrayCopy.splice(lastIndex, 1);
      //맨뒤로 카드보내기
      arrayCopy.splice(0, 0, ...removedCard);
      return arrayCopy;
    });
    onMove(result, index);
  };

  return (
    <MachingCardWrapper>
      {array.map(index => {
        return (
          <MachingCard
            key={index}
            onMove={(result: boolean) => handleMove(result, index)}
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

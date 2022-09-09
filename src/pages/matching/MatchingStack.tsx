import React, { useEffect, useState } from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';
import { fetchMatchingData } from 'api/api';
import { useInfiniteQuery } from '@tanstack/react-query';

function MatchingStack({ children }: any) {
  const [array, setArray] = useState<Array<any>>([{}]);
  const [isLast, setIsLast] = useState(true);
  const { isLoading, fetchNextPage } = useInfiniteQuery(
    ['matchingPageData'],
    fetchMatchingData,
    {
      onSuccess: data => {
        setArray(data.pages.map(pages => pages.data).flat(2));
      },
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    array[0]['isLast'] = true;
  }, [array.length]);

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
              fetchNextPage={fetchNextPage}
              setIsLast={setIsLast}
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

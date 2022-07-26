import React, { useEffect, useState } from 'react';
import { MachingCardWrapper } from 'design/matchingStyles/MatchingPageStyles';
import MachingCard from 'pages/matching/MatchingCard';
import { fetchMatchingData } from 'api/matchingApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loader from 'components/loader/Loader';
import { PageContainer } from 'design/commonStyles';

interface IMatchingStackProps {
  children: any;
  filter: object;
}

function MatchingStack({ children, filter }: IMatchingStackProps) {
  const [array, setArray] = useState<any[]>([]);
  const [nextArray, setNextArray] = useState<any[]>([]);
  const [previousArray, setPreviousArray] = useState<any[]>([]);
  const [circularArray, setCircularArray] = useState<any[]>([]);
  const { isLoading, fetchNextPage } = useInfiniteQuery(
    ['matchingPageData', filter],
    ({ pageParam = 1 }) => fetchMatchingData(filter, { pageParam }),
    {
      onSuccess: data => {
        setArray(data.pages.map(page => page.data).flat(2));
      },
      onError: error => alert(error),
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setCircularArray([...previousArray, ...nextArray]);
  }, [array, nextArray, previousArray]);

  useEffect(() => {
    if (nextArray.length + previousArray.length === array.length) {
      // 좋아요
      const previousPagesLength = Math.floor(previousArray.length / 10) * 10;
      setNextArray([
        ...array.slice(
          previousPagesLength,
          previousPagesLength + nextArray.length
        ),
      ]);
    } else {
      // 페이지네이션
      setNextArray([...array.slice(previousArray.length, array.length)]);
    }
  }, [array]);

  const handleMove = (direction: string | undefined) => {
    if (direction === 'left' && nextArray.length > 0) {
      setPreviousArray([...previousArray, nextArray.pop()]);
      setNextArray([...nextArray]);
    } else if (direction === 'right' && previousArray.length > 0) {
      setNextArray([...nextArray, previousArray.pop()]);
      setPreviousArray([...previousArray]);
    }
  };

  if (isLoading) {
    return (
      <PageContainer style={{ justifyContent: 'center' }}>
        <Loader />
      </PageContainer>
    );
  }

  return (
    <MachingCardWrapper>
      {circularArray.map(data => (
        <MachingCard
          key={data.userId}
          onMove={(direction: string | undefined) => handleMove(direction)}
          fetchData={data}
          fetchNextPage={fetchNextPage}
        >
          {children}
        </MachingCard>
      ))}
    </MachingCardWrapper>
  );
}

export default MatchingStack;

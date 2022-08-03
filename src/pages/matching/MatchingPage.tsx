import React from 'react';
import { PageContainer } from 'design/commonStyles';
import MachingImgCard from './MatchingImgCard';

function MatchingPage() {
  //이미지 컨테이너에 img/info모두 담고, 컨테이너에 고유 key주고 map하여 슬라이드
  //이미지 url을 key를 가진 고유한 카드의 background-image속성에 넣기
  return (
    <PageContainer>
      <MachingImgCard />
    </PageContainer>
  );
}

export default MatchingPage;

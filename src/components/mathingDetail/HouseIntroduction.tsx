import {
  DetailContent,
  DetailContentTitle,
} from 'design/mathingDetailStyles/matchingDetailStyles';

type HouseIntroductionProps = {
  houseIntroduction: {
    room: number;
    cost: number;
    houseInfo: string;
  };
};

function HouseIntroduction({ houseIntroduction }: HouseIntroductionProps) {
  return (
    <>
      <DetailContentTitle>방 개수</DetailContentTitle>
      <DetailContent>{houseIntroduction.room}개</DetailContent>
      <DetailContentTitle>주거비용</DetailContentTitle>
      <DetailContent>
        {houseIntroduction.cost.toLocaleString('ko-KR')}원
      </DetailContent>
      <DetailContentTitle>
        저희 집은 이런 특징을 가지고 있어요.
      </DetailContentTitle>
      <DetailContent>{houseIntroduction.houseInfo}</DetailContent>
    </>
  );
}

export default HouseIntroduction;

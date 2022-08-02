import {
  DetailImgWrapper,
  DetailImg,
  DetailImgInfoWrapper,
  DetailImgInfoContent,
  DetailImgInfoDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';

//TODO : 이미지 정보와 유저정보 받아오기
function DetailPhotos() {
  return (
    <DetailImgWrapper>
      <DetailImg
        src="https://image.kmib.co.kr/online_image/2020/0902/611817110014970749_1.jpg"
        alt="사진1"
      />
      <DetailImgInfoWrapper>
        <DetailImgInfoDiv>
          <DetailImgInfoContent>워니 | 매칭률 80%</DetailImgInfoContent>
          <DetailImgInfoContent>마포구 | 26 | 여성</DetailImgInfoContent>
        </DetailImgInfoDiv>
      </DetailImgInfoWrapper>
    </DetailImgWrapper>
  );
}

export default DetailPhotos;

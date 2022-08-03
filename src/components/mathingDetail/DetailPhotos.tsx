import {
  DetailImgWrapper,
  DetailImg,
  DetailImgInfoWrapper,
  DetailImgInfoContent,
  DetailImgInfoDiv,
  ChatButtonDiv,
  ChatButtonIcon,
  RelativeDiv,
  LikeIconDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

type DetailPhotoProps = {
  userBasicInfo: {
    nickname: string;
    address: string;
    age: number;
    sex: string;
    experience: number;
  };
  matchingRate: number;
  photoUrls: Array<string>;
};

function DetailPhotos({ userBasicInfo }: DetailPhotoProps) {
  return (
    <DetailImgWrapper>
      <RelativeDiv>
        <DetailImg
          src="https://image.kmib.co.kr/online_image/2020/0902/611817110014970749_1.jpg"
          alt="사진1"
        />
        <LikeIconDiv>
          <FontAwesomeIcon icon={faHeart} />
        </LikeIconDiv>
      </RelativeDiv>
      <DetailImgInfoWrapper>
        <DetailImgInfoDiv>
          <DetailImgInfoContent>
            {userBasicInfo.nickname} | 동거 경험 :
            {parseInt((userBasicInfo.experience / 30).toString())}개월
          </DetailImgInfoContent>
          <DetailImgInfoContent>
            {userBasicInfo.address} | {userBasicInfo.age} | {userBasicInfo.sex}
          </DetailImgInfoContent>
        </DetailImgInfoDiv>

        <ChatButtonDiv>
          <ChatButtonIcon>
            <FontAwesomeIcon icon={faComment} />
          </ChatButtonIcon>
        </ChatButtonDiv>
      </DetailImgInfoWrapper>
    </DetailImgWrapper>
  );
}

export default DetailPhotos;

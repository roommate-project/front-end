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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type DetailPhotoProps = {
  userBasicInfo: {
    nickname: string;
    address: string;
    age: number;
    sex: string;
    experience: number;
  };
  photoUrls: Array<string>;
};

function DetailPhotos({ userBasicInfo, photoUrls }: DetailPhotoProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <DetailImgWrapper>
      <RelativeDiv>
        <Slider {...settings}>
          {photoUrls.map((photo, index) => (
            <div>
              <DetailImg src={photo} width="100%" key={index} />
            </div>
          ))}
        </Slider>

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

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

interface IDetailPhotoProps {
  userBasicInfo: {
    name: string;
    nickName: string;
    age: number;
    address: string;
    gender: string;
    experience: number;
  };
  photoUrls: Array<string>;
}

function DetailPhotos({ userBasicInfo, photoUrls }: IDetailPhotoProps) {
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
            <div key={index}>
              <DetailImg src={photo} width="100%" />
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
            {userBasicInfo.nickName} | 동거 경험 :
            {parseInt((userBasicInfo.experience / 30).toString())}개월
          </DetailImgInfoContent>
          <DetailImgInfoContent>
            {userBasicInfo.address} | {userBasicInfo.age} |{' '}
            {userBasicInfo.gender}
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

import {
  DetailImgWrapper,
  DetailImg,
  DetailImgInfoWrapper,
  DetailImgInfoContent,
  ChatButtonDiv,
  ChatButtonIcon,
  RelativeDiv,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
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
            <DetailImg src={photo} key={index} />
          ))}
        </Slider>
        <DetailImgInfoWrapper>
          <DetailImgInfoContent>
            <span>{userBasicInfo.nickName}</span> 님은 <br />
            타인과 공동 거주 경험이{' '}
            <span>
              {parseInt((userBasicInfo.experience / 30).toString())} 개월
            </span>
            있어요!
          </DetailImgInfoContent>
          <ChatButtonDiv>
            <ChatButtonIcon>
              <FontAwesomeIcon icon={faComment} />
            </ChatButtonIcon>
          </ChatButtonDiv>
        </DetailImgInfoWrapper>
      </RelativeDiv>
    </DetailImgWrapper>
  );
}

export default DetailPhotos;

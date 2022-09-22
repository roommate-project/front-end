import {
  MatchingInfoBox,
  MatchinglocationInfo,
  MatchingUserInfo,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';

function MatchingCardInfo({ data }: any) {
  return (
    <MatchingInfoBox>
      <MatchingUserInfo>
        {data.gender === 'male' ? (
          <FontAwesomeIcon icon={faMars} />
        ) : (
          <FontAwesomeIcon icon={faVenus} />
        )}
        <p>
          {data.nickName}, {data.age}
        </p>
        <p>{`"${data.info}"`}</p>
      </MatchingUserInfo>
      <MatchinglocationInfo>
        <FontAwesomeIcon icon={faLocationDot} />
        {data.location}
      </MatchinglocationInfo>
    </MatchingInfoBox>
  );
}

export default MatchingCardInfo;

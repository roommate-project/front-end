import {
  IconBox,
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
        <IconBox>
          {data.gender === 'male' ? (
            <FontAwesomeIcon icon={faMars} />
          ) : (
            <FontAwesomeIcon icon={faVenus} />
          )}
        </IconBox>
        <span>
          {data.nickName}, {data.age}
        </span>
        <p>{`"${data.info}"`}</p>
      </MatchingUserInfo>
      <MatchinglocationInfo>
        <IconBox>
          <FontAwesomeIcon icon={faLocationDot} />
        </IconBox>
        <span>{data.location}</span>
      </MatchinglocationInfo>
    </MatchingInfoBox>
  );
}

export default MatchingCardInfo;

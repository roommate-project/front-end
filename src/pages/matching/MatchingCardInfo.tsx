import {
  MatchingInfoBox,
  MatchinglocationInfo,
  MatchingUserInfo,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  /* faMars,
  faVenus, */
} from '@fortawesome/free-solid-svg-icons';

function MatchingCardInfo() {
  return (
    <>
      <MatchingInfoBox>
        <MatchingUserInfo>
          {/* {data.gender === 'male' ? (
            <FontAwesomeIcon icon={faMars} />
          ) : (
            <FontAwesomeIcon icon={faVenus} />
          )} */}
          <p>귀요미, 24</p>
          <p>"깨끗한 사람 같이 살아요"</p>
        </MatchingUserInfo>
        <MatchinglocationInfo>
          <FontAwesomeIcon icon={faLocationDot} />
          도봉구
        </MatchinglocationInfo>
      </MatchingInfoBox>
    </>
  );
}

export default MatchingCardInfo;

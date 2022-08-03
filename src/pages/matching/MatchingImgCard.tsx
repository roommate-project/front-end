import React from 'react';
import {
  MatchingCircle,
  MatchingCircleBox,
  MatchingImgContainer,
  MatchingInfoBox,
  MatchinglocationInfo,
  MatchingUserInfo,
} from 'design/matchingStyles/MatchingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faLocationDot,
  /*   faMars,
  faVenus, */
} from '@fortawesome/free-solid-svg-icons';

function MachingImgCard() {
  return (
    <MatchingImgContainer>
      <MatchingInfoBox>
        <MatchingUserInfo>
          {/*             {data.gender === 'male' ? (
          <FontAwesomeIcon icon={faMars} />
        ) : (
          <FontAwesomeIcon icon={faVenus} />
        )} */}
          <h1>귀요미, 24</h1>
          <p>"깨끗한 사람 같이 살아요"</p>
        </MatchingUserInfo>
        <MatchinglocationInfo>
          <FontAwesomeIcon icon={faLocationDot} />
          도봉구
        </MatchinglocationInfo>
      </MatchingInfoBox>
      <MatchingCircleBox>
        <MatchingCircle types="chat">
          <FontAwesomeIcon icon={faComment} />
        </MatchingCircle>
        <MatchingCircle types="like">
          <FontAwesomeIcon icon={faHeart} />
        </MatchingCircle>
      </MatchingCircleBox>
    </MatchingImgContainer>
  );
}

export default MachingImgCard;

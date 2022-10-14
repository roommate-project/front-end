import {
  DetailContent,
  DetailContentTitle,
  IntroductionBox,
  IntroductionContainer,
  IntroductionEmphasis,
  MatchingRateInfo,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import { comparisonTestResults } from 'utils/comparisonTestResults';
import MatchingRateResultMe from 'components/mathingDetail/MatchingRateResultMe';

interface IUserInformationProps {
  userIntroduction: {
    detailUserInfo: {
      name: string;
      nickName: string;
      age: number;
      address: string;
      gender: string;
      experience: number;
    };
    want_long: number;
    info: string;
    testList: boolean[];
    detailHouseInfo: {
      room: number;
    };
    userTestList: boolean[];
  };
}

const printMatchingRateMessage = (matchingRate: string | number) => {
  if (matchingRate < 20) {
    return '이런...아마 함께할 수 없을 거에요...🤯';
  } else if (matchingRate < 40) {
    return '조금...안맞을지도...?🤭';
  } else if (matchingRate < 60) {
    return '함께 살만은 할지도~?🤔';
  } else if (matchingRate < 80) {
    return '이정도면 서로 배려하면서 살 수 있지 않을까요?!😉';
  } else if (matchingRate < 100) {
    return '이 정도면 환상의 궁합~! 우리 함께 살까요??😘';
  } else return '다신 못만날 운명의 룸메이트! 놓치지 마세요!😍';
};

function UserIntroduction({ userIntroduction }: IUserInformationProps) {
  return (
    <IntroductionContainer>
      <IntroductionBox>
        <DetailContentTitle>매칭률</DetailContentTitle>
        <MatchingRateInfo>
          {userIntroduction.detailUserInfo.nickName}님과 나의 케미는{' '}
          <span>
            {comparisonTestResults(
              userIntroduction.userTestList,
              userIntroduction.testList
            )}
          </span>
          % 에요!
          <p>
            {printMatchingRateMessage(
              comparisonTestResults(
                userIntroduction.userTestList,
                userIntroduction.testList
              )
            )}
          </p>
        </MatchingRateInfo>
        <DetailContentTitle>인사</DetailContentTitle>
        <DetailContent>
          안녕하세요. 저는{'   '}
          <IntroductionEmphasis>
            {userIntroduction.detailUserInfo.name}
          </IntroductionEmphasis>
          (이)라고 합니다.
          <br />
          나이는{'   '}
          <IntroductionEmphasis>
            {userIntroduction.detailUserInfo.age}
          </IntroductionEmphasis>
          살이고,{'   '}
          <IntroductionEmphasis>
            {userIntroduction.detailUserInfo.gender}
          </IntroductionEmphasis>
          입니다.
          <br />
          <IntroductionEmphasis>
            {userIntroduction.detailUserInfo.address}
          </IntroductionEmphasis>
          에 살고 있어요.
          <br />
          <IntroductionEmphasis>
            {parseInt((userIntroduction.want_long / 30).toString())}개월
          </IntroductionEmphasis>
          {userIntroduction.detailHouseInfo.room !== 0
            ? '간 같이 살 룸메이트를 구합니다.'
            : '간 지낼 곳을 구하고있어요.'}
        </DetailContent>
        <DetailContentTitle>이런 사람과 함께 살고 싶어요</DetailContentTitle>
        <DetailContent>{userIntroduction.info}</DetailContent>
        <DetailContentTitle>거주 성향 테스트 결과</DetailContentTitle>
        <MatchingRateResultMe
          userTestResult={userIntroduction.userTestList}
          testResult={userIntroduction.testList}
        />
      </IntroductionBox>
    </IntroductionContainer>
  );
}

export default UserIntroduction;

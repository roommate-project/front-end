import {
  DetailContent,
  DetailContentTitle,
  IntroductionEmphasis,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import MatchingRateResultMe from './MatchingRateResultMe';

type UserInformationProp = {
  selfIntroduction: {
    userBasicInfo: {
      name: string;
      age: number;
      address: string;
      sex: string;
    };
    desiredResidencePeriod: number;
    userMessage: string;
    testResult: Array<boolean>;
  };
  userTestResult: Array<boolean>;
};

function UserIntroduction({
  selfIntroduction,
  userTestResult,
}: UserInformationProp) {
  return (
    <>
      <DetailContentTitle>인사</DetailContentTitle>
      <DetailContent>
        안녕하세요. 저는{'   '}
        <IntroductionEmphasis>
          {selfIntroduction.userBasicInfo.name}
        </IntroductionEmphasis>
        라고 합니다.
        <br />
        나이는{'   '}
        <IntroductionEmphasis>
          {selfIntroduction.userBasicInfo.age}
        </IntroductionEmphasis>
        살이고,{'   '}
        <IntroductionEmphasis>
          {selfIntroduction.userBasicInfo.sex}
        </IntroductionEmphasis>
        입니다.
        <br />
        <IntroductionEmphasis>
          {selfIntroduction.userBasicInfo.address}
        </IntroductionEmphasis>
        에 살고 있어요.{'   '}
        <IntroductionEmphasis>
          {parseInt((selfIntroduction.desiredResidencePeriod / 30).toString())}
          개월
        </IntroductionEmphasis>
        간 같이 살 룸메이트를 구합니다.
      </DetailContent>
      <DetailContentTitle>이런 사람과 함께 살고 싶어요</DetailContentTitle>
      <DetailContent>{selfIntroduction.userMessage}</DetailContent>
      <DetailContentTitle>거주 성향 테스트</DetailContentTitle>
      <MatchingRateResultMe
        userTestResult={userTestResult}
        testResult={selfIntroduction.testResult}
      />
    </>
  );
}

export default UserIntroduction;

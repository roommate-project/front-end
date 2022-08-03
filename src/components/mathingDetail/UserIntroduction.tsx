import {
  DetailContent,
  DetailContentTitle,
  IntroductionEmphasis,
  MatchingRateMessage,
} from 'design/mathingDetailStyles/matchingDetailStyles';
import { comparisonTestResults } from 'utils/comparisonTestResults';
import MatchingRateResultMe from './MatchingRateResultMe';

type UserInformationProps = {
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
  roomCount: number;
};

function UserIntroduction({
  selfIntroduction,
  userTestResult,
  roomCount,
}: UserInformationProps) {
  return (
    <div>
      <MatchingRateMessage>
        <p>
          매칭률{' '}
          {comparisonTestResults(userTestResult, selfIntroduction.testResult)}%
        </p>
      </MatchingRateMessage>
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
        에 살고 있어요.
        <br />
        <IntroductionEmphasis>
          {parseInt((selfIntroduction.desiredResidencePeriod / 30).toString())}
          개월
        </IntroductionEmphasis>
        {roomCount
          ? '간 같이 살 룸메이트를 구합니다.'
          : '간 지낼 곳을 구하고있어요.'}
      </DetailContent>
      <DetailContentTitle>이런 사람과 함께 살고 싶어요</DetailContentTitle>
      <DetailContent>{selfIntroduction.userMessage}</DetailContent>
      <DetailContentTitle>거주 성향 테스트 결과</DetailContentTitle>
      <MatchingRateResultMe
        userTestResult={userTestResult}
        testResult={selfIntroduction.testResult}
      />
    </div>
  );
}

export default UserIntroduction;

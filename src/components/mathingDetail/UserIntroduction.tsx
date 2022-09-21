import {
  DetailContent,
  DetailContentTitle,
  IntroductionEmphasis,
  MatchingRateMessage,
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

function UserIntroduction({ userIntroduction }: IUserInformationProps) {
  return (
    <div>
      <MatchingRateMessage>
        <p>
          매칭률{' '}
          {comparisonTestResults(
            userIntroduction.userTestList,
            userIntroduction.testList
          )}
          %
        </p>
      </MatchingRateMessage>
      <div style={{ padding: '0 20px' }}>
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
            {parseInt((userIntroduction.want_long / 30).toString())}
            개월
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
      </div>
    </div>
  );
}

export default UserIntroduction;

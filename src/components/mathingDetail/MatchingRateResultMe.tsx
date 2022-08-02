import { DetailTestDiv } from 'design/mathingDetailStyles/matchingDetailStyles';

type MatchingProps = {
  testResult: Array<boolean>;
  userTestResult: Array<boolean>;
};

function MatchingRateResultMe({ testResult, userTestResult }: MatchingProps) {
  return (
    <DetailTestDiv>
      {testResult.map((answer, index) => {
        if (answer === userTestResult[index]) {
          return <div key={index.toString() + answer}>잘맞아요</div>;
        }
        return <div key={index.toString() + answer}>이부분은 다르네요</div>;
      })}
    </DetailTestDiv>
  );
}

export default MatchingRateResultMe;

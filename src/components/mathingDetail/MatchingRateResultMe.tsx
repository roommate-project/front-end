import { residentialLifeQuestionList } from 'utils/residentialLifeQuestionList';
import {
  DetailTestDiv,
  DetailPageResultCard,
  ResultCardQuestion,
  ResultCardAnswer,
  ResultCardMessage,
} from 'design/mathingDetailStyles/matchingRateResultMeStyles';

type MatchingProps = {
  testResult: Array<boolean>;
  userTestResult: Array<boolean>;
};

function MatchingRateResultMe({ testResult, userTestResult }: MatchingProps) {
  return (
    <DetailTestDiv>
      {residentialLifeQuestionList.map((list, index) => {
        return (
          <DetailPageResultCard
            key={list.q}
            isMatching={testResult[index] === userTestResult[index]}
          >
            <ResultCardQuestion>
              Q{index + 1}.{list.q}
            </ResultCardQuestion>
            <ResultCardAnswer>A.{list.a1}</ResultCardAnswer>
            <ResultCardAnswer>B.{list.a2}</ResultCardAnswer>
            {testResult[index] === userTestResult[index] ? (
              <ResultCardMessage key={index.toString() + list.a1}>
                잘맞아요
              </ResultCardMessage>
            ) : (
              <ResultCardMessage key={index.toString() + list.a2}>
                이부분은 다르네요
              </ResultCardMessage>
            )}
          </DetailPageResultCard>
        );
      })}
    </DetailTestDiv>
  );
}

export default MatchingRateResultMe;

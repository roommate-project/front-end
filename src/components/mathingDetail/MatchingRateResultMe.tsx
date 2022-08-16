import { residentiailQuestionList } from 'utils/residentialQuestionList';
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
      {residentiailQuestionList.map((list, index) => {
        return (
          <DetailPageResultCard
            key={list.question}
            isMatching={testResult[index] === userTestResult[index]}
          >
            <ResultCardQuestion>
              Q{index + 1}.{list.question}
            </ResultCardQuestion>
            <ResultCardAnswer>A.{list.answer1}</ResultCardAnswer>
            <ResultCardAnswer>B.{list.answer2}</ResultCardAnswer>
            {testResult[index] === userTestResult[index] ? (
              <ResultCardMessage key={index.toString() + list.answer1}>
                잘맞아요
              </ResultCardMessage>
            ) : (
              <ResultCardMessage key={index.toString() + list.answer2}>
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

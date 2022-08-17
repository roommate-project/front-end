import React from 'react';
import {
  DetailPageResultCard,
  DetailTestDiv,
  ResultCardAnswer,
  ResultCardQuestion,
} from 'design/mathingDetailStyles/matchingRateResultMeStyles';
import { residentiailQuestionList } from 'utils/residentialQuestionList';
import {
  MyIntroduceBackground,
  MyIntroduceContent,
  MyIntroduceOptionBox,
  MyIntroducePutButton,
  MyIntroduceRowBox,
  MyIntroduceSelectBox,
  MyIntroduceTextArea,
  MyIntroduceTitle,
  MyIntroduceContentTitle,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const period = [...new Array(14)].map((_, i) => i);

const dummyUserData = {
  experience: '10',
  want_long: '24',
  info: '시끄러운 사람 ㄴㄴ',
  test_result: [
    { questionId: 1, answer: true },
    { questionId: 2, answer: false },
    { questionId: 3, answer: true },
    { questionId: 4, answer: false },
    { questionId: 5, answer: false },
    { questionId: 6, answer: true },
  ],
};

function MyIntroduceSelf() {
  return (
    <MyIntroduceBackground>
      <MyIntroduceTitle>내 정보</MyIntroduceTitle>
      <MyIntroduceContentTitle> 동거 경험 기간</MyIntroduceContentTitle>
      <div>
        <MyIntroduceContent>
          다른 사람과
          <MyIntroduceSelectBox
            name="period"
            id="period"
            defaultValue={dummyUserData.experience}
          >
            {period.map(period => (
              <MyIntroduceOptionBox value={period}>
                {period < 13 ? `${period}개월` : '1년 이상'}
              </MyIntroduceOptionBox>
            ))}
          </MyIntroduceSelectBox>{' '}
          살았어요.
        </MyIntroduceContent>
      </div>
      <MyIntroduceContentTitle> 희망 거주 기간</MyIntroduceContentTitle>
      <div style={{ marginBottom: '10px' }}>
        <MyIntroduceSelectBox
          name="period"
          id="period"
          defaultValue={
            parseInt(dummyUserData.want_long) >= 12
              ? 13
              : dummyUserData.want_long
          }
        >
          {period.map(period => (
            <MyIntroduceOptionBox value={period}>
              {period < 13 ? `${period}개월` : '1년 이상'}
            </MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>{' '}
      </div>
      <MyIntroduceRowBox>
        <MyIntroduceContentTitle>
          {' '}
          이런 사람과 함께 살고 싶어요
          <MyIntroducePutButton icon={faPencil} />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>
      <MyIntroduceRowBox>
        <MyIntroduceTextArea
          defaultValue={dummyUserData.info}
          name="etcMessage"
          id="etcMessage"
        />
      </MyIntroduceRowBox>
      <MyIntroduceRowBox>
        <MyIntroduceContentTitle>
          성향 테스트
          <MyIntroducePutButton icon={faPencil} />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>

      <DetailTestDiv>
        {residentiailQuestionList.map((list, index) => {
          return (
            <DetailPageResultCard key={list.question} isMatching={true}>
              <ResultCardQuestion>
                Q{index + 1}.{list.question}
              </ResultCardQuestion>
              {dummyUserData.test_result[index].answer ? (
                <ResultCardAnswer>A.{list.answer1}</ResultCardAnswer>
              ) : (
                <ResultCardAnswer>B.{list.answer2}</ResultCardAnswer>
              )}
            </DetailPageResultCard>
          );
        })}
      </DetailTestDiv>
    </MyIntroduceBackground>
  );
}

export default MyIntroduceSelf;

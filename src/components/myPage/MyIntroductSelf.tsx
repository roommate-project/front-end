import {
  DetailPageResultCard,
  DetailTestDiv,
  ResultCardAnswer,
  ResultCardQuestion,
} from 'design/mathingDetailStyles/matchingRateResultMeStyles';
import React from 'react';
import { residentiailQuestionList } from 'utils/residentialQuestionList';

const period = [...new Array(14)].map((_, i) => i);

function MyIntroduceSelf() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: '10px',
      }}
    >
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>내 정보</p>
      <p style={{ fontSize: '18px', margin: '10px 0' }}> 동거 경험 기간</p>
      <div>
        <p style={{ fontSize: '14px', marginBottom: '5px' }}>
          다른 사람과 {/* TODO 디폴트값 정하기 */}
          <select name="period" id="period">
            {period.map(period => (
              <option value={period}>
                {period < 13 ? `${period}개월` : '1년 이상'}
              </option>
            ))}
          </select>{' '}
          살았어요.
        </p>
      </div>
      <p style={{ fontSize: '18px', margin: '10px 0' }}> 희망 거주 기간</p>
      <div style={{ marginBottom: '10px' }}>
        <select name="period" id="period">
          {period.map(period => (
            <option value={period}>
              {period < 13 ? `${period}개월` : '1년 이상'}
            </option>
          ))}
        </select>{' '}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ fontSize: '18px', margin: '10px 0' }}>
          {' '}
          이런 사람과 함께 살고 싶어요
        </p>
        <button>수정</button>
      </div>
      <div
        style={{
          marginBottom: '10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <textarea
          name="etcMessage"
          id="etcMessage"
          style={{
            width: '60%',
            height: '100px',
            borderRadius: '10px',
            padding: '5px',
          }}
        />
      </div>
      <p style={{ fontSize: '18px', margin: '10px' }}>성향 테스트</p>

      <DetailTestDiv>
        {residentiailQuestionList.map((list, index) => {
          return (
            <DetailPageResultCard key={list.question} isMatching={true}>
              <ResultCardQuestion>
                Q{index + 1}.{list.question}
              </ResultCardQuestion>
              {/* TODO 내가 답변한거 티나게 바꾸기 */}
              <ResultCardAnswer>A.{list.answer1}</ResultCardAnswer>
              <ResultCardAnswer>B.{list.answer2}</ResultCardAnswer>
            </DetailPageResultCard>
          );
        })}
      </DetailTestDiv>
    </div>
  );
}

export default MyIntroduceSelf;

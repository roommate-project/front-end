import { PageContainer } from 'design/commonStyles';
import React, { useState, useEffect } from 'react';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  TestBackground,
  TestBox,
  TestFinishedButton,
  TestNextIcon,
  TestAnswerBox,
  TestQuestion,
} from 'design/residentialPropensityTest/residentialPropensityTest';

const residentiailQuestionList = [
  {
    id: 1,
    question: '나는 평소에',
    answer1: '12시 이전에 잠든다.',
    answer2: '새벽 늦게 잠든다.',
  },
  {
    id: 2,
    question: '나는 아침에',
    answer1: '모닝콜 하나로도 잘 일어난다.',
    answer2: '여러개를 맞춰놔야 겨우 일어난다.',
  },
  {
    id: 3,
    question: '나는 집안일을',
    answer1: '제때제때 한다.',
    answer2: '모아놓고 한번에 한다.',
  },
  {
    id: 4,
    question: '나는 청소를',
    answer1: '매일 더러운게 눈에 보일 때 마다 한다.',
    answer2: '횟수를 정해놓고 한다.',
  },
  {
    id: 5,
    question: '나는 쓰레기를',
    answer1: '하나씩 자주 버린다.',
    answer2: '모아두고 한번에 버린다.',
  },
  {
    id: 6,
    question: '나는 주말에',
    answer1: '주로 집에 있는다.',
    answer2: '밖에 나가서 논다.',
  },
];

function ResidentialPropensityTest() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const navigation = useNavigate();

  useEffect(() => {
    setQuestionNumber(0);
    return () => {
      setQuestionNumber(0);
    };
  }, []);

  return (
    <PageContainer>
      <TestBackground>
        <TestBox>
          <div
            style={{
              width: '100%',
              margin: 'auto 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TestQuestion>
              Q{questionNumber + 1}.
              {residentiailQuestionList[questionNumber].question}
            </TestQuestion>
            <TestAnswerBox type={true} isSelected={false}>
              A.{residentiailQuestionList[questionNumber].answer1}
            </TestAnswerBox>
            <TestAnswerBox type={false} isSelected={false}>
              B.{residentiailQuestionList[questionNumber].answer2}
            </TestAnswerBox>
            {questionNumber < 5 && (
              <TestNextIcon
                isSelected={false}
                icon={faCircleChevronRight}
                onClick={() => {
                  setQuestionNumber(questionNumber + 1);
                }}
              />
            )}
            {questionNumber === 5 && (
              <TestFinishedButton
                isSelected={false}
                onClick={() => {
                  //TODO 페이지 띄울때 가입인지 or 수정인지 확인 후에 경로 설정 다시해주기
                  navigation('/');
                }}
              >
                테스트 완료!
              </TestFinishedButton>
            )}
          </div>
        </TestBox>
      </TestBackground>
    </PageContainer>
  );
}

export default ResidentialPropensityTest;

import { PageContainer } from 'design/commonStyles';
import React, { useState, useEffect } from 'react';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { residentiailQuestionList } from 'utils/residentialQuestionList';
import {
  TestBackground,
  TestBox,
  TestFinishedButton,
  TestNextIcon,
  TestAnswerBox,
  TestQuestion,
} from 'design/residentialPropensityTest/residentialPropensityTest';

type AnswerType = {
  questionNum: number;
  answer: boolean;
};

function ResidentialPropensityTest() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [testResult, setTestResult] = useState<Array<AnswerType>>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);
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
            <TestAnswerBox
              answerType={true}
              selected={testResult[questionNumber].answer === true}
              onClick={() => {
                setTestResult(() => {
                  let temp = testResult;
                  temp.push({ questionNum: questionNumber, answer: true });
                  const newLen = temp
                    .slice()
                    .reverse()
                    .filter(
                      (v, i, a) =>
                        a.findIndex(t => t.questionNum === v.questionNum) === i
                    )
                    .reverse();

                  return newLen;
                });
                setIsSelected(true);
              }}
            >
              A.{residentiailQuestionList[questionNumber].answer1}
            </TestAnswerBox>
            <TestAnswerBox
              answerType={false}
              selected={testResult[questionNumber].answer === false}
              onClick={() => {
                setTestResult(() => {
                  let temp = testResult;
                  temp.push({ questionNum: questionNumber, answer: false });
                  const newLen = temp
                    .slice()
                    .reverse()
                    .filter(
                      (v, i, a) =>
                        a.findIndex(t => t.questionNum === v.questionNum) === i
                    )
                    .reverse();

                  return newLen;
                });
                setIsSelected(true);
              }}
            >
              B.{residentiailQuestionList[questionNumber].answer2}
            </TestAnswerBox>
            {questionNumber < 5 && (
              <TestNextIcon
                selected={isSelected}
                icon={faCircleChevronRight}
                onClick={() => {
                  setQuestionNumber(questionNumber + 1);
                  setIsSelected(false);
                }}
              />
            )}
            {questionNumber === 5 && (
              <TestFinishedButton
                selected={isSelected}
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

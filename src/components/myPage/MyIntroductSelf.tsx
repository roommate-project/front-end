import React, { useState } from 'react';
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
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { putUserDatas } from 'api/mypageApi';
import { useMutation } from '@tanstack/react-query';

const period = [...new Array(14)].map((_, i) => i);

type myIntroduceSelfProps = {
  myInfoData: {
    experience: number;
    wantPeriod: number;
    userMessage: string;
  };
  userTestResult: Array<boolean>;
};

function MyIntroduceSelf({ myInfoData, userTestResult }: myIntroduceSelfProps) {
  const [editUserMessage, setEditUserMessage] = useState(true);
  const [userData, setUserData] = useState({
    want_long: myInfoData.wantPeriod.toString(),
    experience: myInfoData.experience.toString(),
    info: myInfoData.userMessage,
  });

  const userDataMutation = useMutation(putUserDatas, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('정보 수정 완료');
      }
    },
  });

  const saveUserDatas = () => {
    userDataMutation.mutate(userData);
    setEditUserMessage(true);
  };

  const onChangeDatas = (e: any, type: string) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.toString(),
    });
    if (type !== 'text') {
      saveUserDatas();
    }
  };

  return (
    <MyIntroduceBackground>
      <MyIntroduceTitle>내 정보</MyIntroduceTitle>
      <MyIntroduceContentTitle> 동거 경험 기간</MyIntroduceContentTitle>
      <div>
        <MyIntroduceContent>
          다른 사람과
          <MyIntroduceSelectBox
            name="experience"
            id="period"
            defaultValue={myInfoData.experience}
            onChange={e => {
              onChangeDatas(e, 'select');
            }}
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
          name="want_long"
          id="period"
          defaultValue={
            parseInt(myInfoData.wantPeriod.toString()) >= 12
              ? 13
              : myInfoData.wantPeriod
          }
          onChange={e => {
            onChangeDatas(e, 'select');
          }}
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
          <MyIntroducePutButton
            icon={editUserMessage ? faPencil : faFloppyDisk}
            onClick={() => {
              editUserMessage ? setEditUserMessage(false) : saveUserDatas();
            }}
          />
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>
      <MyIntroduceRowBox>
        <MyIntroduceTextArea
          defaultValue={myInfoData.userMessage}
          name="etcMessage"
          id="etcMessage"
          onChange={e => {
            onChangeDatas(e, 'text');
          }}
          disabled={editUserMessage}
        />
      </MyIntroduceRowBox>
      <MyIntroduceRowBox>
        <MyIntroduceContentTitle>
          성향 테스트
          <Link to={'/residential-test'}>
            <MyIntroducePutButton icon={faPencil} />
          </Link>
        </MyIntroduceContentTitle>
      </MyIntroduceRowBox>

      <DetailTestDiv>
        {residentiailQuestionList.map((list, index) => {
          return (
            <DetailPageResultCard key={list.question} isMatching={true}>
              <ResultCardQuestion>
                Q{index + 1}.{list.question}
              </ResultCardQuestion>
              {userTestResult[index] ? (
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

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  EmailAuthSubmiBtn,
  EmailReSendBtn,
} from 'design/signupStyles/SignUpStyle';
import AuthTimer from 'components/authTimer/AuthTimer';
import { TimerContainer } from 'components/authTimer/AuthTimerStyles';
import ProgressBar from 'components/progressBar/ProgressBar';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAuthNumValidation } from 'api/signUpApi';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { Form, Input, PageContainer, Title } from 'design/commonStyles';

type FormValue = {
  authNum: number;
};

function SignUpEmailAuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: 'all' });

  const mutation = useMutation(fetchAuthNumValidation, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        alert('인증이 완료되었습니다.');
        navigation('/sign-up/last');
      } else {
        alert(data.message);
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  const navigation = useNavigate();
  const savedEmail = sessionStorage.getItem('email');
  const [isResend, setIsResend] = useState(true);

  const queryClient = useQueryClient();

  const onClickResend = () => {
    queryClient.refetchQueries(['sendEmail']);
    setIsResend(true);
  };

  const onValid: SubmitHandler<FormValue> = authNum => {
    mutation.mutate(authNum);
  };

  return (
    <PageContainer>
      <Title>
        <RoommateLogo height={48} />
        <p>{savedEmail}로 인증번호를 전송하였습니다. </p>
      </Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <TimerContainer>
          <Input
            type="text"
            {...register('authNum', {
              required: true,
              pattern: {
                value: /^(\d){6}$/,
                message: '인증번호 형식이 올바르지 않습니다.',
              },
            })}
          />
          <AuthTimer isResend={isResend} setIsResend={setIsResend} />
        </TimerContainer>
        <span>{errors?.authNum?.message}</span>
        <EmailReSendBtn onClick={onClickResend}>인증번호 재전송</EmailReSendBtn>
        <EmailAuthSubmiBtn disabled={!isValid}>인증하기</EmailAuthSubmiBtn>
      </Form>
      <ProgressBar width={40} />
    </PageContainer>
  );
}

export default SignUpEmailAuthPage;

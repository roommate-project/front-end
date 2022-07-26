import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEmailValidation, fetchSendEmailAuth } from 'api/signUpApi';
import ProgressBar from 'components/progressBar/ProgressBar';
import {
  EmailSendBtn,
  SignUpPageContainer,
} from 'design/signupStyles/SignUpStyle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { Form, Input, Title } from 'design/commonStyles';

type FormValue = {
  email: string;
};

function SignUpEmailPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: 'all' });

  const navigation = useNavigate();

  const { refetch: refetchSendEmail } = useQuery(
    ['sendEmail'],
    fetchSendEmailAuth,
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: 0,
      onSuccess: () => {
        navigation('/sign-up/email-auth');
      },
    }
  );

  const mutation = useMutation(fetchEmailValidation, {
    onSuccess: ({ data }, variable) => {
      if (data.code === 200) {
        console.log(data);
        sessionStorage.setItem('email', variable.email);
        refetchSendEmail();
      } else if (data.code === 400) {
        alert('이미 사용중인 이메일 입니다.');
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  const onValid: SubmitHandler<FormValue> = email => {
    mutation.mutate(email);
  };

  return (
    <SignUpPageContainer>
      <Title>
        <RoommateLogo height={44} />
        <p> 로그인 시 사용할 이메일을 입력해주세요!</p>
      </Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          type="text"
          {...register('email', {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
        />
        <span>{errors?.email?.message}</span>
        <EmailSendBtn disabled={!isValid}>인증번호 전송</EmailSendBtn>
      </Form>
      <ProgressBar width={20} />
    </SignUpPageContainer>
  );
}

export default SignUpEmailPage;

import { useMutation } from '@tanstack/react-query';
import { fetchEmailValidation, fetchSendEmailAuth } from 'api/api';
import ProgressBar from 'components/progressBar/ProgressBar';
import {
  PageContainer,
  SignUpForm,
  SignUpInput,
  EmailSendBtn,
  Title,
} from 'design/signupStyles/SignUpStyle';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValue = {
  email: string;
};

function SignUpEmailPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValue>();
  const mutation = useMutation(fetchEmailValidation);
  const navigation = useNavigate();
  const [isActive, setIsActive] = useState(false);

  //watch()는 함수가 종료되고 재렌더링 되기 때문에 event를 통해 SignUpinput변화 체크
  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value ? setIsActive(true) : setIsActive(false);
    !event.currentTarget.value && clearErrors();
  };

  const onValid: SubmitHandler<FormValue> = (data: any) => {
    mutation.mutateAsync(data).then(res => {
      if (res.data.code === 200) {
        sessionStorage.setItem('email', JSON.stringify(data.email));
        fetchSendEmailAuth(data).then(res => {
          if (res.data.code === 200) {
            navigation('/sign-up/email-auth');
          } else {
            alert(res.data.messsage);
          }
        });
      } else if (res.data.code === 400) {
        alert('이미 사용중인 이메일 입니다.');
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <PageContainer>
      <Title>
        ROOMMATE
        <div>
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
          <br />
          룸메이트찾기 어쩌고 저쩌고
        </div>
      </Title>
      <SignUpForm onSubmit={handleSubmit(onValid)}>
        <SignUpInput
          type="text"
          {...register('email', {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
          onChange={event => onChangeEmail(event)}
        />
        <span>{errors?.email?.message}</span>
        <EmailSendBtn isActive={isActive}>인증번호 전송</EmailSendBtn>
      </SignUpForm>
      <ProgressBar width={33} />
    </PageContainer>
  );
}

export default SignUpEmailPage;

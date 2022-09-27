import { SubmitHandler, useForm } from 'react-hook-form';
import {
  LoginDiv,
  LoginSubmitBtn,
} from 'design/loginStyles/EmailLoginPageStyles';
import {
  Form,
  Input,
  InputLabel,
  PageContainer,
  Title,
} from 'design/commonStyles';
import { useMutation } from '@tanstack/react-query';
import { fetchEmailLogin } from 'api/loginApi';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';

type FormValue = {
  email: string;
  password: string;
};

function EmailLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValue>({ mode: 'all' });

  const mutation = useMutation(fetchEmailLogin, {
    onSuccess: ({ data }) => {
      if (data.code === 200) {
        let accessToken = data.message.split(' ')[0];
        let refreshToken = data.message.split(' ')[1];
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        navigation('/');
      }
    },
  });

  const navigation = useNavigate();

  const onValid: SubmitHandler<FormValue> = data => {
    mutation.mutate(data);
  };

  return (
    <PageContainer>
      <Title>
        <RoommateLogo height={48} />
        <p>
          룸메이트와 다툼은 이제 그만! 🙅🏻‍♀️
          <br />
          <span>성향 기반 매칭 서비스 룸메이트</span>에서 <br />
          나와 꼭 맞는 룸메이트를 찾아보세요!
        </p>
      </Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <LoginDiv>
          <Input
            id="email"
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])[-_\.]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
        </LoginDiv>
        <span>{errors?.email?.message}</span>
        <InputLabel htmlFor="password">비밀번호</InputLabel>
        <LoginDiv>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                message:
                  '비밀번호는 영문과 숫자를 합쳐 8글자 이상 입력해주세요.',
              },
            })}
          />
        </LoginDiv>
        <span>{errors?.password?.message}</span>
        <LoginSubmitBtn type="submit" disabled={!isValid}>
          로그인
        </LoginSubmitBtn>
      </Form>
    </PageContainer>
  );
}

export default EmailLoginPage;

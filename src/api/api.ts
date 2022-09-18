import { authApi, publicApi } from 'api/authApi';

//이메일 회원가입
export async function fetchEmailValidation(data: any) {
  const response = await publicApi.post(`/api/user/emailValidate`, {
    email: data.email,
  });
  return response;
}

export async function fetchSendEmailAuth() {
  const response = await publicApi.get(
    `/api/user/validate?email=${sessionStorage.getItem('email')}`
  );
  return response;
}

export async function fetchAuthNumValidation(data: any) {
  const response = await publicApi.post(
    `/api/user/validate?email=${sessionStorage.getItem('email')}`,
    {
      emailCode: data.authNum,
    }
  );
  return response;
}

export async function fetchEmailRegister(data: any) {
  let formData = new FormData();
  formData.append('representFile', data.representImage[0]);
  formData.append(
    'userAddForm',
    new Blob([JSON.stringify(data)], { type: 'application/json' })
  );

  const response = await publicApi.post(
    `/api/user/add?email=${sessionStorage.getItem('email')}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response;
}

//이메일 로그인
export async function fetchEmailLogin(data: any) {
  const response = await publicApi.post(
    `${process.env.REACT_APP_SERVER_IP}/api/login`,
    {
      email: data.email,
      password: data.password,
    }
  );
  return response;
}

//매칭페이지

export async function fetchMatchingLike(data: any) {
  const response = await authApi.post(`/api/match/like`, {
    id: data,
  });
  return response;
}

export async function fetchMatchingData(filter: {}, { pageParam = 1 }) {
  const response = await authApi.get(`/api/match/filter/${pageParam}`, {
    params: filter,
  });
  return response;
}

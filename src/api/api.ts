import axios from 'axios';

//이메일 회원가입
export async function fetchEmailValidation(data: any) {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/user/emailValidate`,
    {
      email: data.email,
    }
  );
  return response;
}

export async function fetchSendEmailAuth() {
  const response = await axios.get(
    `${
      process.env.REACT_APP_SERVER_IP
    }/api/user/validate?email=${sessionStorage.getItem('email')}`
  );
  return response;
}

export async function fetchAuthNumValidation(data: any) {
  const response = await axios.post(
    `${
      process.env.REACT_APP_SERVER_IP
    }/api/user/validate?email=${sessionStorage.getItem('email')}`,
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

  const response = await axios.post(
    `${
      process.env.REACT_APP_SERVER_IP
    }/api/user/add?email=${sessionStorage.getItem('email')}`,
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
  const response = await axios.post(
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
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/match/like`,
    {
      id: data,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
}

export async function fetchMatchingData(filter: {}, { pageParam = 1 }) {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/filter/${pageParam}`,
    {
      params: filter,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
}

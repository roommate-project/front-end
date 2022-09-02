import axios from 'axios';

export const SERVER_URL = 'http://3.39.140.24';
export const savedEmail = sessionStorage.getItem('email');

//이메일 회원가입
export async function fetchEmailValidation(data: any) {
  const response = await axios.post(`${SERVER_URL}/api/user/emailValidate`, {
    email: data.email,
  });
  return response;
}

export async function fetchSendEmailAuth() {
  const response = await axios.get(
    `${SERVER_URL}/api/user/validate?email=${savedEmail}`
  );
  return response;
}

export async function fetchAuthNumValidation(data: any) {
  const response = await axios.post(
    `${SERVER_URL}/api/user/validate?email=${savedEmail}`,
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
    `${SERVER_URL}/api/user/add?email=${savedEmail}`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
  return response;
}

//이메일 로그인
export async function fetchEmailLogin(data: any) {
  const response = await axios.post(`${SERVER_URL}/api/login`, {
    email: data.email,
    password: data.password,
  });
  return response;
}

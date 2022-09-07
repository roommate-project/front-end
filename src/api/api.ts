import axios from 'axios';

export const savedEmail = sessionStorage.getItem('email');
export const TOKEN = sessionStorage.getItem('token');

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
    `${process.env.REACT_APP_SERVER_IP}/api/user/validate?email=${savedEmail}`
  );
  return response;
}

export async function fetchAuthNumValidation(data: any) {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/user/validate?email=${savedEmail}`,
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
    `${process.env.REACT_APP_SERVER_IP}/api/user/add?email=${savedEmail}`,
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
export async function fetchMatchingData() {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  return response;
}

export async function fetchMatchingLike(data: any) {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/match/like`,
    {
      id: data,
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  return response;
}

export function fetchMatchingFilter(data: any) {
  console.log(data);
  /*   const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/filter/페이지번호?rate=${}&gender=${}&wantLongMax=${}&wantLongMin=${}&ageMax=${}&ageMin=${}&costMax=${}&costMin=${}&roomMax=${}&roomMin=${}`
  );
  return response; */
}

import axios from 'axios';

export const SERVER_URL = 'http://3.39.140.24';
export const savedEmail = sessionStorage.getItem('email');

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
  const response = await axios.post(
    `${SERVER_URL}/api/user/add?email=${savedEmail}`,
    {
      userAddForm: {
        name: data.name,
        password: data.password,
        nickName: data.nickName,
        gender: data.gender,
        location: data.location,
        age: data.age,
        dormitory: data.dormitory,
      },
      representFile: data,
    }
  );
  return response;
}

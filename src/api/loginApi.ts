import { publicApi } from 'api/authApi';

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

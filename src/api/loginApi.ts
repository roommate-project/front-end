import { publicApi } from 'api/authApi';

export async function fetchEmailLogin(data: any) {
  const response = await publicApi.post(`/api/login`, {
    email: data.email,
    password: data.password,
  });
  return response;
}

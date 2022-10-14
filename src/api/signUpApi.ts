import { publicApi } from 'api/authApi';

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

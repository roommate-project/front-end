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
export async function fetchMatchingData({ pageParam = 1 }) {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
}

export async function fetchMatchingFilter(data: any) {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/filter/1`,
    {
      params: {
        rate: data.matchingRate,
        gender:
          data.남자 && data.여자
            ? null
            : data.남자 && !data.여자
            ? 'male'
            : !data.남자 && data.여자
            ? 'female'
            : 0,
        wantLongMax: data.maxMonth === '무제한' ? null : data.maxMonth,
        wantLongMin: data.minMonth,
        ageMax: data.maxAge === '무제한' ? null : data.maxAge,
        ageMin: data.minAge,
        costMax: data.maxCost === '무제한' ? null : data.maxCost,
        costMin: data.minCost,
        roomMax: 3,
        roomMin: 0,
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
}

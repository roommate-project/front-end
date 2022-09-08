import axios from 'axios';

export const getMypageData = async (userId: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

export const putUserRepresentPhoto = async (file: string) => {
  let formData = new FormData();
  formData.append('representFile', file);
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/image/represent`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

export const putUserNames = async (data: object) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage`,
    data,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

export const putUserDatas = async (data: object) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage`,
    data,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

export const postUserTestResult = async (data: Array<string>) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/question`,
    { question: data },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

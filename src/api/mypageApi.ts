import axios from 'axios';

//TODO 페이지네이션 추가하기
export const getMypageData = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/1`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

export const putUserRepresentPhoto = async (file: any) => {
  const formData = new FormData();
  formData.append('representImage', file);
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/image/represent`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
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

export const postUserLikeButton = async (userId: number) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/match/like`,
    { id: userId.toString() },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};
export const postUserHousePhotos = async (photo: File) => {
  const formData = new FormData();
  formData.append('restImages', photo);

  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/image/rest`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  console.log(response);
  return response;
};

/**
 * @param photoId : 삭제할 이미지 아이디
 * @returns 서버 응답
 */
export const deleteHousePhoto = async (photoId: number) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/image/rest/${photoId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
};

import axios from 'axios';
import { privateApi } from 'api/authApi';

//TODO 페이지네이션 추가하기
export const getMypageData = async (userId: string) => {
  const response = await privateApi.get(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/${userId}`
  );
  return response;
};

export const putUserRepresentPhoto = async (file: any) => {
  const formData = new FormData();
  formData.append('representImage', file);
  const response = await privateApi.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage/image/represent`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response;
};

export const putUserNames = async (data: object) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_IP}/api/mypage`,
    data
  );
  return response;
};

export const putUserDatas = async (data: object) => {
  const response = await privateApi.put(`/api/mypage`, data);

  return response;
};

export const postUserTestResult = async (data: Array<string>) => {
  const response = await privateApi.post(`/api/mypage/question`, {
    question: data,
  });

  return response;
};

export const postUserLikeButton = async (userId: number) => {
  const response = await privateApi.post(`/api/match/like`, {
    id: userId.toString(),
  });
  return response;
};
export const postUserHousePhotos = async (photo: File) => {
  const formData = new FormData();
  formData.append('restImages', photo);

  const response = await privateApi.post(`/api/mypage/image/rest`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

/**
 * @param photoId : 삭제할 이미지 아이디
 * @returns 서버 응답
 */
export const deleteHousePhoto = async (photoId: number) => {
  const response = await privateApi.delete(`/api/mypage/image/rest/${photoId}`);
  return response;
};

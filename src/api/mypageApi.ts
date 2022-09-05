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

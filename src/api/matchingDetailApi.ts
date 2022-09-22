import { privateApi } from 'api/authApi';

export async function fetchMatchingDetailInfo(userId: string | undefined) {
  const response = await privateApi.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/info/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    }
  );
  return response;
}

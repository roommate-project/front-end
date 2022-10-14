import { privateApi } from 'api/authApi';

export async function fetchMatchingDetailInfo(userId: string | undefined) {
  const response = await privateApi.get(`/api/match/info/${userId}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });
  return response;
}

import { privateApi } from 'api/authApi';

export async function fetchMatchingLike(data: any) {
  const response = await privateApi.post(`/api/match/like`, {
    id: data,
  });
  return response;
}

export async function fetchMatchingData(filter: {}, { pageParam = 1 }) {
  const response = await privateApi.get(`/api/match/filter/${pageParam}`, {
    params: filter,
  });
  return response;
}

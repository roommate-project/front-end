import { privateApi } from 'api/authApi';

export async function getChatList(userId: string | null) {
  const response = await privateApi.get(`/api/chat/rooms/${userId}`);
  return response;
}

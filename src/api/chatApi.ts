import { privateApi } from 'api/authApi';

interface ICreateChatRoomProps {
  senderId: string | null;
  receiverId: number;
}

export async function getChatList(userId: string | null) {
  const response = await privateApi.get(`/api/chat/rooms/${userId}`);
  return response;
}

export async function postCreateChatRoom(users: ICreateChatRoomProps) {
  const response = await privateApi.post('/api/chat/room', {
    sender: users.senderId,
    receiver: users.receiverId,
  });

  return response;
}

export async function getChatRoom(roomId: string) {
  const response = privateApi.get(
    `/api/chat/room/${sessionStorage.getItem('userId')}/${roomId}`
  );
  return response;
}

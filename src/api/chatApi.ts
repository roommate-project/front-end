import { privateApi } from 'api/authApi';

interface ICreateChatRoomProps {
  senderId: string | null;
  receiverId: string;
}

export async function getChatList(userId: string | null) {
  const response = await privateApi.get(`/api/chat/rooms/${userId}`);
  return response;
}

export async function postCreateChatRoom({
  senderId,
  receiverId,
}: ICreateChatRoomProps) {
  const response = await privateApi.post('/api/chat/room', {
    sender: senderId,
    receiver: receiverId,
  });
  return response;
}

export async function getChatRoom(roomId: string | undefined) {
  const response = privateApi.get(`/api/chat/room/${roomId}`);
  return response;
}

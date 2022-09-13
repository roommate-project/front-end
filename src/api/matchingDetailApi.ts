import axios from 'axios';

export async function fetchMatchingDetailInfo(userId: string | undefined) {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_IP}/api/match/info/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  );
  return response;
}

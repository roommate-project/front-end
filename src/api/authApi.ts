import axios from 'axios';

export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
});

export const privateApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
  },
});

//refreshToken
privateApi.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (
        error.response.data.message === 'login again : token is not validate'
      ) {
        const originRequest = config;
        const accessToken = sessionStorage.getItem('accessToken');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const response = await privateApi.post('api/refresh', {
          accessToken,
          refreshToken,
        });
        if (response.data.code === 200) {
          const newAccessToken = response.data.message.split(' ')[0];
          const newRefreshToken = response.data.message.split(' ')[1];
          sessionStorage.setItem('accessToken', newAccessToken);
          sessionStorage.setItem('refreshToken', newRefreshToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        } else if (response.data.code === 400) {
          alert(response.data.message);
          window.location.replace('/login');
        } else if (response.data.code === 204) {
          sessionStorage.clear();
          alert('로그인 시간이 만료되었습니다. 재로그인 해주세요!');
          window.location.replace('/login');
        } else {
          alert(response.data.message);
        }
      }
    }
    return Promise.reject(error);
  }
);

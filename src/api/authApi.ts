import axios from 'axios';

export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
});

export const authApi = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_IP}`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });
};

/* authApi.interceptors.response.use(
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
        const originalRequest = config;
        const accessToken = await localStorage.getItem('accessToken');
        const refreshToken = await localStorage.getItem('refreshToken');
        const { data } = await authApi.post('api/refresh', {
          accessToken,
          refreshToken,
        });
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          data;
        await localStorage.setItem('accessToken', newAccessToken);
        await localStorage.setItem('refreshToken', newRefreshToken);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
 */

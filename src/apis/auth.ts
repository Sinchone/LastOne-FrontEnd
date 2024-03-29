import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  setAccessTokenToCookie,
  setRefreshTokenToCookie,
} from '@utils/token';
import { getToken } from './user';

const createAuthApi = () => {
  const _api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
  });
  _api.interceptors.response.use(
    (response) => {
      if (response.data) return response.data;
      return response;
    },
    async (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 401) {
          const refreshToken = getRefreshTokenFromCookie();
          if (refreshToken) {
            const response = await getToken({ refreshToken });

            if (response.response?.data?.errorCode === 'ST003' || response.response?.data?.errorCode === 'VT006') {
              return Promise.reject(response);
            } else if (response.data.errorCode === null) {
              setAccessTokenToCookie(response.data.data.accessToken);
              setRefreshTokenToCookie(response.data.data.refreshToken);

              const { config } = error;
              const originalRequest = config as InternalAxiosRequestConfig<any>;

              const accessToken = getAccessTokenFromCookie();
              if (accessToken?.includes('test')) {
                originalRequest.headers.Authorization = accessToken;
              } else {
                originalRequest.headers.Authorization = `Bearer ${getAccessTokenFromCookie()}`;
              }

              const originalResponse = await axios(originalRequest);
              return originalResponse.data;
            }
          }

          return Promise.reject(error);
        }
      }
    }
  );
  _api.interceptors.request.use((config) => {
    const accessToken = getAccessTokenFromCookie();

    if (accessToken && config.headers) {
      if (accessToken.includes('test')) config.headers.Authorization = accessToken;
      else config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });
  return _api;
};

const authApi = createAuthApi();

export default authApi;

import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@constants/net';
import { getAccessTokenFromCookie } from '@utils/token';

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

const createApiMethod =
  (_axiosInstace: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstace.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return error.response;
      }
    );
    return _axiosInstace({
      ...config,
      method: methodType,
    });
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: createApiMethod(customAxios, HTTP_METHODS.GET),
  post: createApiMethod(customAxios, HTTP_METHODS.POST),
  patch: createApiMethod(customAxios, HTTP_METHODS.PATCH),
  put: createApiMethod(customAxios, HTTP_METHODS.PUT),
  delete: createApiMethod(customAxios, HTTP_METHODS.DELETE),
};

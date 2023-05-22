import api from '@apis/base';
import authApi from '@apis/auth';
import { getAccessTokenFromCookie, getRefreshTokenFromCookie } from '@utils/token';

export const login = (data: { code: string }) => {
  const { code } = data;
  let body = {};
  if (process.env.NODE_ENV === 'development') {
    body = { code, env: 'local' };
  } else body = { code };

  return api.post({
    url: 'api/oauth2/login/kakao',
    data: body,
  });
};

export const getMyProfile = () => {
  return authApi.get(`api/mypage`);
};

export const getToken = (data: { refreshToken: string }) => {
  return api.post({
    url: 'api/token/refresh',
    data,
  });
};

export const editProfile = (formData: FormData) => {
  return authApi.put(`api/mypage`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const logout = () => {
  const accessToken = getAccessTokenFromCookie();
  const refreshToken = getRefreshTokenFromCookie();

  return api.post({
    url: 'api/token/logout',
    data: { accessToken, refreshToken },
  });
};

import api from '@apis/base';
import authApi from '@apis/auth';

export const login = (data: { code: string; env: string }) => {
  return api.post({
    url: 'api/oauth2/login/kakao',
    data,
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

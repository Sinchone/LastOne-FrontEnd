import api from '@apis/base';

export const login = (data: { code: string }) => {
  return api.post({
    url: 'api/oauth2/login/kakao',
    data,
  });
};

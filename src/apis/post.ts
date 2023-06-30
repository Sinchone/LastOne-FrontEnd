import api from '@apis/base';
import { getAccessTokenFromCookie } from '@utils/token';

export const createPost = (formData: FormData) => {
  const accessToken = getAccessTokenFromCookie();

  return api.post({
    url: 'api/recruitment',
    data: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getMainPosts = () => {
  return api.get({
    url: 'api/recruitment/main',
  });
};

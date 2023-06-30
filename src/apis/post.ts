import api from '@apis/base';
import { getAccessTokenFromCookie } from '@utils/token';
import authApi from './auth';

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

export const getAllPosts = () => {
  return api.get({ url: 'api/recruitment' });
};

export const getPostById = (id: number) => {
  return api.get({ url: `api/recruitment/${id}` });
};

export const deletePostById = (id: number) => {
  return authApi.delete(`api/recruitment/${id}`);

export const getMainPosts = () => {
  return api.get({
    url: 'api/recruitment/main',
  });
};

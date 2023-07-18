import api from '@apis/base';
import { getAccessTokenFromCookie } from '@utils/token';
import authApi from './auth';
import { SearchParam } from '@typing/post';

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

export const getPostList = (pageParam: number, params: SearchParam) => {
  if (pageParam) params.lastId = pageParam;

  return api.get({ url: 'api/recruitment?', params });
};

export const getPostById = (id: number) => {
  return api.get({ url: `api/recruitment/${id}` });
};

export const deletePostById = (id: number) => {
  return authApi.delete(`api/recruitment/${id}`);
};

export const getMainPosts = () => {
  return api.get({
    url: 'api/recruitment/main',
  });
};

export const checkApplyStatus = (id: number) => {
  return authApi.get(`/api/recruitment/${id}/application`);
};

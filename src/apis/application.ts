import api from '@apis/base';
import { getAccessTokenFromCookie } from '@utils/token';
import authApi from './auth';

export const getRequestedApplications = () => {
  return authApi.get('api/application/requested');
};

export const getReceivedApplications = () => {
  return authApi.get('api/application/received');
};

export const createApplication = (id: number) => {
  const accessToken = getAccessTokenFromCookie();

  return api.post({
    url: 'api/application',
    data: { recruitmentId: id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const deleteApplication = (id: number) => {
  return authApi.delete(`api/application/${id}`);
};

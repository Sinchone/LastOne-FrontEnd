import authApi from './auth';

export const getRequestedApplications = () => {
  return authApi.get('api/application/requested');
};

export const getReceivedApplications = () => {
  return authApi.get('api/application/received');
};

export const createApplication = (id: number) => {
  return authApi.post('api/application', { recruitmentId: id });
};

export const deleteApplication = (id: number) => {
  return authApi.delete(`api/application/${id}`);
};

export const completeMatching = (recruitmentId: number, applicationId: number) => {
  return authApi.patch(`/api/recruitment/${recruitmentId}/application/${applicationId}`);
};

export const cancelMatching = (recruitmentId: number, applicationId: number) => {
  return authApi.delete(`/api/recruitment/${recruitmentId}/application/${applicationId}`);
};

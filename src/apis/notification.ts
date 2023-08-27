import authApi from './auth';

export const getNotificationList = () => {
  return authApi.get(`/api/notification`);
};

export const readNotification = (id: number) => {
  return authApi.patch(`/api/notification/${id}`);
};

export const deleteNotification = (deleteIdList: number[]) => {
  return authApi.delete(`/api/notification`, { data: { deleteIdList: deleteIdList } });
};

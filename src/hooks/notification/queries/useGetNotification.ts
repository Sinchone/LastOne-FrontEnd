import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getNotificationList } from '@apis/notification';

const useGetNotificationList = () => {
  return useQuery(queryKeys.notification, () => getNotificationList());
};

export default useGetNotificationList;

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getReceivedApplications } from '@apis/application';
import { getAccessTokenFromCookie } from '@utils/token';

const useGetReceivedApplications = () => {
  const token = getAccessTokenFromCookie();

  return useQuery(queryKeys.receivedApplications, () => getReceivedApplications(), {
    enabled: !!token,
  });
};

export default useGetReceivedApplications;

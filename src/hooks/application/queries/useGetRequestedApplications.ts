import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getRequestedApplications } from '@apis/application';
import { getAccessTokenFromCookie } from '@utils/token';

const useGetRequestedApplications = () => {
  const token = getAccessTokenFromCookie();

  return useQuery(queryKeys.requestedApplications, () => getRequestedApplications(), {
    enabled: !!token,
  });
};

export default useGetRequestedApplications;

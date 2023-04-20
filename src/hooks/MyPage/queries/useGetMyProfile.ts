import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getMyProfile } from '@apis/user';
import { getAccessTokenFromCookie } from '@utils/token';

const useGetMyProfile = () => {
  const token = getAccessTokenFromCookie();

  return useQuery(queryKeys.me, () => getMyProfile(), {
    enabled: !!token,
    staleTime: Infinity
  });
};

export default useGetMyProfile;

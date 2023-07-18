import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getMyProfile } from '@apis/user';

const useGetMyProfile = () => {
  return useQuery(queryKeys.me, () => getMyProfile(), {
    staleTime: Infinity,
  });
};

export default useGetMyProfile;

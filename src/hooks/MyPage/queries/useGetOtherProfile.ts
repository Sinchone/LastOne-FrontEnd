import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getOtherProfile } from '@apis/user';

const useGetOtherProfile = (memberId: string) => {
  return useQuery([...queryKeys.other, memberId], () => getOtherProfile(memberId));
};

export default useGetOtherProfile;

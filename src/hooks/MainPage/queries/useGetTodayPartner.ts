import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getAccessTokenFromCookie } from '@utils/token';
import { getTodayPartner } from '@apis/partner';

const useGetTodayPartner = () => {
  const token = getAccessTokenFromCookie();

  return useQuery(queryKeys.partner, () => getTodayPartner(), {
    enabled: !!token,
  });
};

export default useGetTodayPartner;

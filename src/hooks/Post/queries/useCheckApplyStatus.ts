import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { checkApplyStatus } from '@apis/post';
import { getAccessTokenFromCookie } from '@utils/token';

const useCheckApplyStatus = (id: number) => {
  const token = getAccessTokenFromCookie();

  return useQuery([...queryKeys.applyStatus, id], () => checkApplyStatus(id), {
    enabled: !!(token && id),
  });
};

export default useCheckApplyStatus;

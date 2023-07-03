import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getPostById } from '@apis/post';

const useGetPostById = (id: number) => {
  return useQuery([...queryKeys.postDetail, id], () => getPostById(id), {
    enabled: !!id,
  });
};

export default useGetPostById;

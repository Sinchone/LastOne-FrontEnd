import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getMainPosts } from '@apis/post';

const useGetPosts = () => {
  return useQuery(queryKeys.mainPost, () => getMainPosts(), {});
};

export default useGetPosts;

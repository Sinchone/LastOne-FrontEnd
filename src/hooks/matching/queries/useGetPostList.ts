import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getPostList } from '@apis/post';
import { SearchParam } from '@typing/post';

const useGetPostList = (params: SearchParam) => {
  const { lastId, ...filter } = params;

  return useInfiniteQuery([...queryKeys.postList, { filter }], ({ pageParam }) => getPostList(filter, pageParam), {
    getNextPageParam: (lastPage) => {
      const response = lastPage.data.data;
      const last = response.last;
      const lastId = response.content.at(-1)?.id;

      return !last && lastId;
    },
  });
};

export default useGetPostList;

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getChattingList } from '@apis/chatting';

const useGetChattingList = () => {
    const queryResult = useQuery(queryKeys.chatting, () => getChattingList(), {});
    return queryResult;
};

export default useGetChattingList;
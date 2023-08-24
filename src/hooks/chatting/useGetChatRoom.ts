import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getChatRoomDetail } from '@apis/chatting';

const useGetChatRoom = (roomId: string) => {
  const result = useQuery(queryKeys.chatRoom, () => getChatRoomDetail(roomId), {
    enabled: !!roomId,
  });
  return { data: result.data?.data, isLoading: result.isLoading };
};

export default useGetChatRoom;

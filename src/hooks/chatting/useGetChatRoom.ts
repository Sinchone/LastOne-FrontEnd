import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getChatRoomDetail } from '@apis/chatting';

const useGetChatRoom = (roomId: string) => {
    return useQuery(
        queryKeys.chatRoom, 
        () => getChatRoomDetail(roomId),
        {
            enabled: !!roomId  
        }
    );
};

export default useGetChatRoom;
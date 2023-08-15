import authApi from '@apis/auth';

export const getChattingList = () => {
    return authApi.get('/chat/room');
}

export const deleteChattingRoom = (roomId: string) => {
    return authApi.delete(`/chat/room/${roomId}`);
}

export const getChatRoomDetail = (roomId: string) => {
    return authApi.get(`/chat/room/${roomId}`);
}
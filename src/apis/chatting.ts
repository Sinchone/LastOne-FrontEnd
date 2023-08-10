import authApi from '@apis/auth';

export const getChattingList = () => {
    return authApi.get('/chat/room');
}
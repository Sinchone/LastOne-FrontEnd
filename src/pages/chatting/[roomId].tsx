import React from 'react';
import { ChatMain } from '@components/Chatting';
import { ChatRoomHeader, ChatRoomContent, ChatRoomBottom } from '@components/Chatting';

const chatRoom = () => {
    return (
    <ChatMain>
        < ChatRoomHeader />
        < ChatRoomContent />
        < ChatRoomBottom />
    </ChatMain>
    );
};

export default chatRoom;

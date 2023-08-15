import React, { useEffect, useState } from 'react';
import { ChatMain } from '@components/Chatting';
import { ChatRoomHeader, ChatRoomContent, ChatRoomBottom } from '@components/Chatting';
import { useGetChatRoom } from '@hooks/chatting';
import { useRouter } from 'next/router';
import { Loader } from '@components/Common';

const ChatRoom = () => {
    const router = useRouter();
    const [roomId, setRoomId] = useState<string>('');
    const { data: chatRoomData, isLoading } = useGetChatRoom(roomId);

    useEffect(() => {
        if (router.isReady && router.query.roomId) {
            setRoomId(String(router.query.roomId));
        }
    }, [router.isReady, router.query.roomId]);

    if (isLoading || !roomId) {
        return <Loader />;
    }

    console.log(chatRoomData);

    if (chatRoomData) {
        return (
            <ChatMain>
                <ChatRoomHeader />
                <ChatRoomContent />
                <ChatRoomBottom />
            </ChatMain>
        );
    }
};

export default ChatRoom;

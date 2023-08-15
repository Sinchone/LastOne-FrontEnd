import React, { useEffect, useState } from 'react';
import { ChatMain } from '@components/Chatting';
import { ChatRoomHeader, ChatRoomContent, ChatRoomBottom } from '@components/Chatting';
import { useGetChatRoom } from '@hooks/chatting';
import { useRouter } from 'next/router';
import { Loader } from '@components/Common';
import { ChatRoomType } from '@typing/chatting';

const ChatRoom = () => {
    const router = useRouter();
    const [roomId, setRoomId] = useState<string>('');
    const { data: chatRoomData, isLoading } = useGetChatRoom(roomId) as {
        data: ChatRoomType | null;
        isLoading: boolean;
    };

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
                <ChatRoomHeader gender={chatRoomData.gender} nickname={chatRoomData.nickname} />
                <ChatRoomContent chatRoomData={chatRoomData}/>
                <ChatRoomBottom />
            </ChatMain>
        );
    }
};

export default ChatRoom;

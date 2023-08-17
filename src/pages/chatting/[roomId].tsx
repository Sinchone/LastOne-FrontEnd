import React, { useEffect, useState } from 'react';
import { ChatMain } from '@components/Chatting';
import { ChatRoomHeader, ChatRoomContent, ChatRoomBottom } from '@components/Chatting';
import { useGetChatRoom } from '@hooks/chatting';
import { useRouter } from 'next/router';
import { Loader } from '@components/Common';
import { ChatRoomType } from '@typing/chatting';
import { subscribe } from '@apis/chatting';
import { SubscribeMessageType } from '@typing/chatting';
import { useGetUserInfo } from '@hooks/common/queries';

const ChatRoom = () => {
    const router = useRouter();
    const { currentUserId } = useGetUserInfo();
    const [roomId, setRoomId] = useState<string>('');
    const [chatRoomDataState, setChatRoomDataState] = useState<ChatRoomType | null>(null);

    const { data: chatRoomData, isLoading } = useGetChatRoom(roomId) as {
        data: ChatRoomType | null;
        isLoading: boolean;
    };

    useEffect(() => {
        if (router.isReady && router.query.roomId) {
            setRoomId(String(router.query.roomId));
        }
    }, [router.isReady, router.query.roomId]);

    useEffect(() => {
        if (chatRoomData) {
            setChatRoomDataState(chatRoomData);
        }
    }, [chatRoomData]);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [chatRoomDataState]);

    useEffect(() => {
        if (roomId) {
            subscribe(roomId, (message: SubscribeMessageType) => {
                setChatRoomDataState(prevState => {
                    if (!prevState) return null;
                    return {
                        ...prevState,
                        messages: [...prevState.messages, message] // messages는 예시입니다. 실제 구조에 따라 조정 필요
                    };
                });
            });
        }
    }, [roomId]);


    if (isLoading || !roomId) {
        return <Loader />;
    }

    if (chatRoomDataState) {
        return (
            <ChatMain>
                <ChatRoomHeader gender={chatRoomDataState.gender} nickname={chatRoomDataState.nickname} roomId={roomId} />
                <ChatRoomContent chatRoomData={chatRoomDataState}/>
                <ChatRoomBottom roomId={roomId} otherId={chatRoomDataState.otherUserId} myId={currentUserId} />
                <div id="bottomsheet"></div>
            </ChatMain>
        );
    }
};

export default ChatRoom;

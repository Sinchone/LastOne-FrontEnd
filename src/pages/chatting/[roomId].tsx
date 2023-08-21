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

  useEffect(() => {
    if (chatRoomData) {
      // chatRoomData가 있을 때 (모든 데이터가 로드된 후) 스크롤을 아래로 이동
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [chatRoomData]);

  if (isLoading || !roomId) {
    return <Loader />;
  }

  if (chatRoomData) {
    return (
      <ChatMain>
        <ChatRoomHeader gender={chatRoomData.gender} nickname={chatRoomData.nickname} roomId={roomId} />
        <ChatRoomContent chatRoomData={chatRoomData} />
        <ChatRoomBottom />
        <div id="bottomsheet"></div>
      </ChatMain>
    );
  }
};

export default ChatRoom;

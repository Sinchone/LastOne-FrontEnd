import React from 'react';
import { Loader, Header, Navigation } from '@components/Common';
import { ChatMain, ChatContent } from '@components/Chatting';
import { useGetChattingList } from '@hooks/chatting';
import { useState, useEffect } from 'react';

const Chatting = () => {
  const { data: chattingListData, isError, refetch } = useGetChattingList();
  const [isPossibleToRendering, setIsPossibleToRendering] = useState(false);

  useEffect(() => {
    if (isError) {
      setIsPossibleToRendering(true);
    }
    if (chattingListData) {
      setIsPossibleToRendering(true);
    }
    if (!isPossibleToRendering) {
      refetch();
    }
  }, [isError, chattingListData, isPossibleToRendering, refetch]);

  if (!isPossibleToRendering) {
    return <Loader />;
  }

  const chattingList = chattingListData?.data;

  return (
    <ChatMain>
      <Header />
      <ChatContent chattingList={chattingList} />
      <Navigation />
      <div id="bottomsheet"></div>
    </ChatMain>
  );
};

export default Chatting;

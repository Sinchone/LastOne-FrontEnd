import React from 'react';
import { Loader, MainHeader, Navigation } from '@components/Common';
import { ChatMain, ChatContent } from '@components/Chatting';
import { useGetChattingList, useChatSubscription } from '@hooks/chatting';
import { useState, useEffect } from 'react';
import { useGetUserInfo } from '@hooks/common/queries';
import { useRecoilState } from 'recoil';
import { isReadChattingState } from '@recoil/chatting';

const Chatting = () => {
  const { data: chattingListData, isError, refetch, isFetching } = useGetChattingList();
  const [isPossibleToRendering, setIsPossibleToRendering] = useState(false);
  const [isRead, setIsRead] = useRecoilState(isReadChattingState);
  const [chattingList, setChattingList] = useState([]);
  const { currentUserId } = useGetUserInfo();

  useChatSubscription(currentUserId, () => {
    setIsPossibleToRendering(false);
  });

  useEffect(() => {
    setIsRead(true);
  }, [chattingList, setIsRead]);

  useEffect(() => {
    if (isError) {
      setIsPossibleToRendering(true);
    }
    if (chattingListData) {
      setChattingList(chattingListData.data);
      setIsPossibleToRendering(true);
    }
    if (!isPossibleToRendering) {
      refetch();
    }
  }, [isError, chattingListData, isPossibleToRendering, refetch, isFetching]);

  if (!isPossibleToRendering || isFetching) {
    return <Loader />;
  }

  return (
    <ChatMain>
      <MainHeader />
      <ChatContent chattingList={chattingList} />
      <Navigation />
      <div id="bottomsheet"></div>
    </ChatMain>
  );
};

export default Chatting;

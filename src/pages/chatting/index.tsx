import React from 'react';
import { ChattingList } from '@components/Chatting';
import { useGetChattingList } from '@hooks/chatting';
import { useState, useEffect } from 'react';
import { Loader, MainLayout } from '@components/Common';

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
    <MainLayout>
      <ChattingList chattingList={chattingList} />
      <div id="bottomsheet"></div>
    </MainLayout>
  );
};

export default Chatting;

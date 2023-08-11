import React from 'react';
import { MainLayout } from '@components/Common';
import { ChattingList } from '@components/Chatting';
import { useGetChattingList } from '@hooks/chatting';
import { useState, useEffect } from 'react';
import { Loader } from '@components/Common';

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
    </MainLayout>
  );
};

export default Chatting;

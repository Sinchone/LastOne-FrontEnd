import React from 'react';
import { Loader,Header, Navigation } from '@components/Common';
import { ChatMain, ChatContent } from '@components/Chatting';
import { useGetChattingList } from '@hooks/chatting';
import { useState, useEffect } from 'react';
import { subscribForList } from '@apis/chatting';
import { useGetUserInfo } from '@hooks/common/queries';



const Chatting = () => {
  const { data: chattingListData, isError, refetch, isFetching } = useGetChattingList();
  const [isPossibleToRendering, setIsPossibleToRendering] = useState(false);
  const [chattingList, setChattingList] = useState([]);
  const { currentUserId } = useGetUserInfo();


  useEffect(() => {
    console.log("현재 접속한 유저의 아이디 => ", currentUserId);
    console.log("전역 채널 구독 완료");
    subscribForList(currentUserId,() => {
      console.log("New message received in global channel:");
      setIsPossibleToRendering(false);
    });
  }, []);

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

  console.log(chattingList);

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

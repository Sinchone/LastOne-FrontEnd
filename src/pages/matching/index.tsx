import React, { useState } from 'react';
import { Header, Navigation, BottomSheet } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';

const Matching = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <button onClick={() => setIsOpen(!isOpen)}>ㅇ</button>
      <MatchingHeader />
      <MatchingPosts />
      <Navigation />
      <div id="bottomsheet">{isOpen && <BottomSheet />}</div>
    </>
  );
};

export default Matching;

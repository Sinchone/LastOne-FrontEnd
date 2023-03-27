import React from 'react';
import { Header, Navigation, BottomSheet } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';

const Matching = () => {
  return (
    <>
      <Header />
      <MatchingHeader />
      <MatchingPosts />
      <Navigation />
      <BottomSheet />
    </>
  );
};

export default Matching;

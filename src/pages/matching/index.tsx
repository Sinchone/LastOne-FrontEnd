import React from 'react';
import { Header, Navigation } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';

const Matching = () => {
  return (
    <>
      <Header />
      <MatchingHeader />
      <MatchingPosts />
      <Navigation />
    </>
  );
};

export default Matching;

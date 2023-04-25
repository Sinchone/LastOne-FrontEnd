import React from 'react';
import { BottomSheet, MainLayout } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';
import { useBottomSheet } from '@hooks/common';

const Matching = () => {
  const { bottomsheet } = useBottomSheet();

  return (
    <MainLayout>
      <MatchingHeader />
      <MatchingPosts />
      <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
    </MainLayout>
  );
};

export default Matching;

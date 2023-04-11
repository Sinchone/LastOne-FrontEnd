import React, { useState } from 'react';
import { Header, Navigation, BottomSheet } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';
import { useBottomSheet } from '@hooks/common';

const Matching = () => {
  const { bottomsheet } = useBottomSheet();

  return (
    <>
      <MatchingHeader />
      <MatchingPosts />

      <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
    </>
  );
};

export default Matching;

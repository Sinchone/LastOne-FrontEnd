import React, { useEffect, useState } from 'react';
import { BottomSheet, MainLayout } from '@components/Common';
import { MatchingHeader, MatchingPosts } from '@components/Matching';
import { useBottomSheet } from '@hooks/common';

const Matching = () => {
  const { bottomsheet } = useBottomSheet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <MainLayout>
        <MatchingHeader />
        <MatchingPosts />
        <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
      </MainLayout>
    )
  );
};

export default Matching;

import React from 'react';
import FilterContainer from '@components/Matching/MatchingFilter/FiterContainer';
import BottomArrowIcon from '@assets/icon/bottom-arrow-small.svg';
import BottomArrowWhiteIcon from '@assets/icon/bottom-arrow-white.svg';
import { useRouter } from 'next/router';
import { useBottomSheet } from '@hooks/common';

const PreferGender = () => {
  const router = useRouter();
  const { showBottomSheet } = useBottomSheet();
  const preferGender = router.query.preferGender as string | undefined;

  return (
    <FilterContainer isSelected={preferGender !== undefined}>
      <span onClick={() => showBottomSheet('PreferGender')}>
        {preferGender ? preferGender : '성별'}
        {preferGender ? <BottomArrowWhiteIcon /> : <BottomArrowIcon />}
      </span>
    </FilterContainer>
  );
};

export default PreferGender;

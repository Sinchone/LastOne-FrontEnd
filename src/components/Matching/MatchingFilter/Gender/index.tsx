import React from 'react';
import FilterContainer from '@components/Matching/MatchingFilter/FiterContainer';
import BottomArrowIcon from '@assets/icon/bottom-arrow-small.svg';
import BottomArrowWhiteIcon from '@assets/icon/bottom-arrow-white.svg';
import { useRouter } from 'next/router';
import { useBottomSheet } from '@hooks/common';

const Gender = () => {
  const router = useRouter();
  const { showBottomSheet } = useBottomSheet();
  const gender = router.query.gender as string | undefined;

  return (
    <FilterContainer isSelected={gender !== undefined}>
      <span onClick={() => showBottomSheet('Gender')}>
        {gender ? gender : '성별'}
        {gender ? <BottomArrowWhiteIcon /> : <BottomArrowIcon />}
      </span>
    </FilterContainer>
  );
};

export default Gender;

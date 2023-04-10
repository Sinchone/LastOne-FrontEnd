import React from 'react';
import FilterContainer from '@components/Matching/MatchingFilter/FiterContainer';
import BottomArrowIcon from '@assets/icon/bottom-arrow-small.svg';
import BottomArrowWhiteIcon from '@assets/icon/bottom-arrow-white.svg';
import { useRouter } from 'next/router';
import { useBottomSheet } from '@hooks/common';

const ExerciseArea = () => {
  const router = useRouter();
  const { showBottomSheet } = useBottomSheet();
  const exerciseArea = router.query.exercisearea as string | undefined;

  return (
    <FilterContainer isSelected={exerciseArea !== undefined}>
      <span onClick={() => showBottomSheet('ExerciseArea')}>
        {exerciseArea ? exerciseArea : '운동부위'}
        {exerciseArea ? <BottomArrowWhiteIcon /> : <BottomArrowIcon />}
      </span>
    </FilterContainer>
  );
};

export default ExerciseArea;

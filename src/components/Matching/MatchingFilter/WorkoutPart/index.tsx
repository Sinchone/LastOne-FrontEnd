import React from 'react';
import FilterContainer from '@components/Matching/MatchingFilter/FilterContainer';
import BottomArrowIcon from '@assets/icon/bottom-arrow-small.svg';
import BottomArrowWhiteIcon from '@assets/icon/bottom-arrow-white.svg';
import { useRouter } from 'next/router';
import { useBottomSheet } from '@hooks/common';

const WorkoutPart = () => {
  const router = useRouter();
  const { showBottomSheet } = useBottomSheet();
  const workoutPart = router.query.workoutPart as string | undefined;

  return (
    <FilterContainer isSelected={workoutPart !== undefined}>
      <span onClick={() => showBottomSheet('WorkoutPart')}>
        {workoutPart ? workoutPart : '운동부위'}
        {workoutPart ? <BottomArrowWhiteIcon /> : <BottomArrowIcon />}
      </span>
    </FilterContainer>
  );
};

export default WorkoutPart;

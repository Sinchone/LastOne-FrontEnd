import React from 'react';
import * as S from './style';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';

const FitnessClub = () => {
  const { showBottomSheet } = useBottomSheet();
  const router = useRouter();
  const fitnessClub = router.query.fitnessclub as string | undefined;

  return (
    <S.Wrapper onClick={() => showBottomSheet('FitnessClub')}>
      <span className="location">{fitnessClub ? fitnessClub : '전체'}</span>
      <BottomArrowIcon className="arrow_icon" />
    </S.Wrapper>
  );
};

export default FitnessClub;

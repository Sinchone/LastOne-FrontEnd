import React from 'react';
import * as S from './style';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';

const GymName = () => {
  const { showBottomSheet } = useBottomSheet();
  const router = useRouter();
  const gymName = router.query.gymName as string | undefined;

  return (
    <>
      <S.Wrapper onClick={() => showBottomSheet('GymName')}>
        <span className="location">{gymName ? gymName : '전체'}</span>
        <BottomArrowIcon className="arrow_icon" />
      </S.Wrapper>
    </>
  );
};

export default GymName;

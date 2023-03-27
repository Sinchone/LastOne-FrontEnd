import React from 'react';
import * as S from './style';
import * as BottomSheet from './BottomSheetList';
import BottomSheetPortal from './BottomSheetPortal';
import BottomSheetIcon from '@assets/icon/bottomsheet.svg';

const BottomSheetContainer = () => {
  const Component = BottomSheet['FitnessClub'];

  return (
    <BottomSheetPortal>
      <S.ModalBackground />
      <S.Wrapper>
        <BottomSheetIcon className="icon" />
        <Component />
      </S.Wrapper>
    </BottomSheetPortal>
  );
};

export default BottomSheetContainer;

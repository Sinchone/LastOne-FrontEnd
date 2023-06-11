import React from 'react';
import * as S from './style';
import * as BottomSheet from './BottomSheetList';
import BottomSheetPortal from './BottomSheetPortal';
import BottomSheetIcon from '@assets/icon/bottomsheet.svg';
import { useBottomSheet } from '@hooks/common';

const BottomSheetContainer = () => {
  const { bottomsheet, closeBottomSheet } = useBottomSheet();
  const bottomSheetComp = {
    FitnessClub: BottomSheet['FitnessClub'],
    ExerciseArea: BottomSheet['ExerciseArea'],
    Gender: BottomSheet['Gender'],
    Calendar: BottomSheet['Calendar'],
    '': <></>,
  };
  const Content = bottomSheetComp[bottomsheet.name] as () => JSX.Element;

  return (
    <BottomSheetPortal>
      <S.ModalBackground onClick={closeBottomSheet} />
      <S.Wrapper>
        <BottomSheetIcon className="icon" />
        <Content />
      </S.Wrapper>
    </BottomSheetPortal>
  );
};

export default BottomSheetContainer;

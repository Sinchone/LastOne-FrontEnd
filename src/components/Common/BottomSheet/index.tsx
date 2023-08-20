import React from 'react';
import * as S from './style';
import * as BottomSheet from './BottomSheetList';
import BottomSheetPortal from './BottomSheetPortal';
import BottomSheetIcon from '@assets/icon/bottomsheet.svg';
import { useBottomSheet } from '@hooks/common';

const BottomSheetContainer = () => {
  const { bottomsheet, closeBottomSheet } = useBottomSheet();
  const bottomSheetComp = {
    GymName: BottomSheet['GymName'],
    WorkoutPart: BottomSheet['WorkoutPart'],
    PreferGender: BottomSheet['PreferGender'],
    Calendar: BottomSheet['Calendar'],
    CalendarTime: () => <BottomSheet.CalendarTime initialMenu={bottomsheet.initialMenu} />,
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

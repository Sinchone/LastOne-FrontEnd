import React, { useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

const Calandar = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());

  console.log(value);

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_pitness">
          <CalendarIcon />
          운동날짜
        </span>
        <BottomArrowIcon />
      </S.BottomSheetHeader>
      <S.Content>
        <S.CalandarWrapper>
          <Calendar onChange={onChange} value={value} />
        </S.CalandarWrapper>
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton>취소</S.CancelButton>
        <S.Button>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default Calandar;

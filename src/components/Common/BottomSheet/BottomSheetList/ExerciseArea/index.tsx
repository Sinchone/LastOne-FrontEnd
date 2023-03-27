import React from 'react';
import * as S from './style';
import PlusIcon from '@assets/icon/plus.svg';
import { useBottomSheet } from '@hooks/common';

const ExerciseArea = () => {
  const { closeBottomSheet } = useBottomSheet();
  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_pitness">운동부위</span>
      </S.BottomSheetHeader>
      <S.Content>
        <S.ContentBox>
          <span>전신</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>가슴</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>등</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>어깨</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>하체</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>코어</span>
        </S.ContentBox>
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton onClick={closeBottomSheet}>취소</S.CancelButton>
        <S.Button>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default ExerciseArea;

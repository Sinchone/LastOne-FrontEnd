import React from 'react';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';

const Gender = () => {
  const { closeBottomSheet } = useBottomSheet();

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_pitness">성별</span>
      </S.BottomSheetHeader>
      <S.Content>
        <S.ContentBox>
          <span>무관</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>남성</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>여성</span>
        </S.ContentBox>
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton onClick={closeBottomSheet}>취소</S.CancelButton>
        <S.Button>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default Gender;

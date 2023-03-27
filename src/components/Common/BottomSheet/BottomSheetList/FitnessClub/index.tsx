import React from 'react';
import * as S from './style';
import PlusIcon from '@assets/icon/plus.svg';

const FitnessClub = () => {
  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_pitness">헬스장 선택</span>
        <span className="register_pitness">
          <PlusIcon />
          헬스장 등록
        </span>
      </S.BottomSheetHeader>
      <S.Content>
        <S.ContentBox>
          <span>전체</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>스포애니 성산점</span>
        </S.ContentBox>
        <S.ContentBox>
          <span>수원 바디피트</span>
        </S.ContentBox>
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton>취소</S.CancelButton>
        <S.Button>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default FitnessClub;

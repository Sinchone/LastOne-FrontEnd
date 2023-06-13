import React, { useState } from 'react';
import * as S from './style';
import PlusIcon from '@assets/icon/plus.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const dummy = ['전체', '스포애니 성산점', '수원 바디파트'];

const FitnessClub = () => {
  const [select, setSelect] = useState('');
  const { closeBottomSheet } = useBottomSheet();
  const router = useRouter();

  const handleSelectItem = (el: string) => () => {
    setSelect(el);
  };

  const handleClickApply = () => {
    if (select === '전체') router.push({ pathname: MATCHING_PAGE, query: { ...router.query, fitnessclub: undefined } });
    else
      router.push({
        pathname: MATCHING_PAGE,
        query: { ...router.query, fitnessclub: select },
      });
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_fitness">헬스장 선택</span>
        <span className="register_fitness">
          <PlusIcon />
          헬스장 등록
        </span>
      </S.BottomSheetHeader>
      <S.Content>
        {dummy.map((el) => (
          <S.ContentBox key={el} onClick={handleSelectItem(el)} isSelected={el === select}>
            <span>{el}</span>
          </S.ContentBox>
        ))}
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton onClick={closeBottomSheet}>취소</S.CancelButton>
        <S.Button onClick={handleClickApply}>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default FitnessClub;

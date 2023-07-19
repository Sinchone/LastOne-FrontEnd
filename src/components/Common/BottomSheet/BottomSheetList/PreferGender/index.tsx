import React, { useState } from 'react';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const dummy = ['무관', '남성', '여성'];

const PreferGender = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [select, setSelect] = useState('');
  const router = useRouter();

  const handleSelectItem = (el: string) => () => {
    setSelect(el);
  };

  const handleClickApply = () => {
    router.push({
      pathname: MATCHING_PAGE,
      query: { ...router.query, preferGender: select },
    });
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_fitness">성별</span>
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

export default PreferGender;

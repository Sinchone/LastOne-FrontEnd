import React, { useState } from 'react';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const dummy = ['성별무관', '남성만', '여성만'];

const PreferGender = () => {
  const router = useRouter();
  const { closeBottomSheet } = useBottomSheet();
  const [select, setSelect] = useState(router.query.preferGender || '');

  const handleSelectItem = (el: string) => () => {
    setSelect(el === select ? '' : el);
  };

  const handleClickApply = () => {
    const { preferGender, ...prevQuery } = router.query;
    const query = select ? { ...router.query, preferGender: select } : prevQuery;

    router.push({
      pathname: MATCHING_PAGE,
      query,
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

import React, { useState } from 'react';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const dummy = ['전신', '가슴', '등', '어깨', '하체', '코어'];

const ExerciseArea = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [select, setSelect] = useState('');
  const router = useRouter();

  const handleSelectItem = (el: string) => () => {
    setSelect(el);
  };

  const handleClickApply = () => {
    router.push({
      pathname: MATCHING_PAGE,
      query: { ...router.query, exercisearea: select },
    });
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_pitness">운동부위</span>
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

export default ExerciseArea;

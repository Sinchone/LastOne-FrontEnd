import React, { useState } from 'react';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';
import { exercisePartArray } from '@constants/post';

const WorkoutPart = () => {
  const router = useRouter();
  const { closeBottomSheet } = useBottomSheet();
  const [select, setSelect] = useState(router.query.workoutPart || '');

  const handleSelectItem = (el: string) => () => {
    setSelect(el === select ? '' : el);
  };

  const handleClickApply = () => {
    const { workoutPart, ...prevQuery } = router.query;
    const query = select ? { ...router.query, workoutPart: select } : prevQuery;

    router.push({
      pathname: MATCHING_PAGE,
      query,
    });
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_fitness">운동부위</span>
      </S.BottomSheetHeader>
      <S.Content>
        {exercisePartArray.map((el) => (
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

export default WorkoutPart;

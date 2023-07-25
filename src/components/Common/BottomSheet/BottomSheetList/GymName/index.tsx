import React, { useState } from 'react';
import * as S from './style';
import PlusIcon from '@assets/icon/plus.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const dummy = ['전체', '스포애니 성산점', '수원 바디파트'];

const GymName = () => {
  const router = useRouter();
  const [select, setSelect] = useState(router.query.gymName || '전체');
  const { closeBottomSheet } = useBottomSheet();

  const handleSelectItem = (el: string) => () => {
    setSelect(el);
  };

  const handleClickApply = () => {
    const { gymName, ...prevQuery } = router.query;
    const query = select === '전체' ? prevQuery : { ...router.query, gymName: select };

    router.push({
      pathname: MATCHING_PAGE,
      query,
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

export default GymName;

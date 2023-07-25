import React, { useState } from 'react';
import * as S from './style';
import PlusIcon from '@assets/icon/plus.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { MATCHING_PAGE, MY_PAGE } from '@constants/route';
import { useGetMyProfile } from '@hooks/MyPage/queries';
import { GymInfoType } from '@typing/user';

const GymName = () => {
  const { data: user } = useGetMyProfile();
  const userGyms = user?.data.gyms.map((gym: GymInfoType) => gym.name);
  const gymArray = ['전체', ...userGyms];

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
        <span className="register_fitness" onClick={() => router.push(MY_PAGE)}>
          <PlusIcon />
          헬스장 등록
        </span>
      </S.BottomSheetHeader>
      <S.Content>
        {gymArray.map((el) => (
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

import React, { useState } from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import MenuIcon from '@assets/icon/list.svg';
import { useRouter } from 'next/router';



interface Props {
    nickname: string;
    gender: string;
}

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };


  return (
    <S.Wrapper>
      <S.LeftArrowIconWrapper>
        <LeftArrowIcon onClick={handleRouteBack} />
      </S.LeftArrowIconWrapper>
      <S.Nickname>운동관</S.Nickname>
      <S.Gender>남성</S.Gender>
      <S.MenuIconWrapper>
        <MenuIcon/>
      </S.MenuIconWrapper>
    </S.Wrapper>
  );
};

export default Header;

import React, { useState } from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import MenuIcon from '@assets/icon/list.svg';
import { useRouter } from 'next/router';



interface Props {
  gender: string;
  nickname: string;
}

const Header = ({ gender, nickname }: Props) => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };


  return (
    <S.Wrapper>
      <S.LeftArrowIconWrapper>
        <LeftArrowIcon onClick={handleRouteBack} />
      </S.LeftArrowIconWrapper>
      <S.Nickname>{nickname}</S.Nickname>
      <S.Gender>{gender}</S.Gender>
      <S.MenuIconWrapper>
        <MenuIcon/>
      </S.MenuIconWrapper>
    </S.Wrapper>
  );
};

export default Header;

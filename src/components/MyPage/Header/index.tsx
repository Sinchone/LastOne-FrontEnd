import React from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>마이페이지</span>
      <PenCilIcon />
    </S.Wrapper>
  );
};

export default Header;

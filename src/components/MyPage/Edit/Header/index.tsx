import React from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';
import { MY_PAGE } from '@constants/route';

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.replace(MY_PAGE);
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>마이페이지 수정</span>
    </S.Wrapper>
  );
};

export default Header;

import React from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MY_PAGE_EDIT } from '@constants/route';

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>마이페이지</span>
      <Link href={MY_PAGE_EDIT}>
        <PenCilIcon />
      </Link>
    </S.Wrapper>
  );
};

export default Header;

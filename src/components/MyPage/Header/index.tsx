import React from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MY_PAGE_EDIT } from '@constants/route';
import { logout } from '@apis/user';
import { removeAccessTokenToCookie, removeRefreshTokenToCookie } from '@utils/token';

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
    removeAccessTokenToCookie();
    removeRefreshTokenToCookie();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>마이페이지</span>
      <S.ButtonContainer>
        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
        <Link href={MY_PAGE_EDIT}>
          <PenCilIcon />
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default Header;

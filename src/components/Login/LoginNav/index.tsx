import React from 'react';
import Link from 'next/link';

import * as S from './style';

import Logo from '@assets/icon/loginlogo.svg';
import Kakao from '@assets/icon/kakao.svg';
import Home from '@assets/icon/loginhome.svg';

const LoginNav = () => {
  return (
    <S.NavContainer>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.ButtonContainer>
        <S.KakaoBtn>
          <Kakao />
          카카오 간편 로그인
        </S.KakaoBtn>

        <Link href="/">
          <S.HomeBtn>
            <Home />
            홈으로 가기
          </S.HomeBtn>
        </Link>
      </S.ButtonContainer>
    </S.NavContainer>
  );
};

export default LoginNav;

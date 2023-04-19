import React from 'react';
import Logo from '@assets/icon/logo.svg';
import Alarm from '@assets/icon/alarm.svg';
import Profile from '@assets/icon/profile.svg';
import * as S from './style';
import Link from 'next/link';
import { useGetMyProfile } from '@hooks/MyPage/queries';

const Header = () => {
  const { data } = useGetMyProfile();
  
  
  return (
    <S.Header>
      <S.NavContainer>
        <Logo />
      </S.NavContainer>
      <S.UserNav>
        <Link href={'/upload'}>
          <S.Button>글쓰기</S.Button>
        </Link>
        <Alarm />
        <Profile />
      </S.UserNav>
    </S.Header>
  );
};

export default Header;

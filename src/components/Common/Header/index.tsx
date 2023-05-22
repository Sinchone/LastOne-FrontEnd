import React from 'react';
import Logo from '@assets/icon/logo.svg';
import Alarm from '@assets/icon/alarm.svg';
import Profile from '@assets/icon/profile.svg';
import * as S from './style';
import Link from 'next/link';
import { useGetMyProfile } from '@hooks/MyPage/queries';
import { getRefreshTokenFromCookie } from '@utils/token';
import { createImageUrl } from '@utils/createImageUrl';

const Header = () => {
  const { data: user } = useGetMyProfile();
  const token = getRefreshTokenFromCookie();

  return (
    <S.Header>
      <S.NavContainer>
        <Logo />
      </S.NavContainer>
      {token ? (
        <S.UserNav>
          <Link href={'/upload'}>
            <S.Button>글쓰기</S.Button>
          </Link>
          <Alarm />
          {user?.data.member.profileUrl ? (
            <S.ImgWrapper>
              <Link href={'/mypage'}>
                <img src={createImageUrl(user.data.member.profileUrl)} />
              </Link>
            </S.ImgWrapper>
          ) : (
            <Link href={'/mypage'}>
              <Profile />
            </Link>
          )}
        </S.UserNav>
      ) : (
        <Link href={'/login'}>
          <S.Button>로그인</S.Button>
        </Link>
      )}
    </S.Header>
  );
};

export default Header;

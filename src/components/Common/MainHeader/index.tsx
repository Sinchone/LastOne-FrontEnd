import React from 'react';
import Logo from '@assets/icon/logo.svg';
import Alarm from '@assets/icon/alarm.svg';
import Profile from '@assets/icon/profile.svg';
import * as S from './style';
import Link from 'next/link';
import { useGetMyProfile } from '@hooks/MyPage/queries';
import { getRefreshTokenFromCookie } from '@utils/token';
import { createImageUrl } from '@utils/createImageUrl';

const MainHeader = () => {
  const { data: user } = useGetMyProfile();
  const token = getRefreshTokenFromCookie();

  return (
    <S.Header>
      <Link href={'/'}>
        <S.NavContainer>
          <Logo />
        </S.NavContainer>
      </Link>
      {token ? (
        <S.UserNav>
          <Link href={'/post/write'}>
            <S.Button>글쓰기</S.Button>
          </Link>
          <Link href={'/notifications'}>
            <Alarm />
          </Link>
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

export default MainHeader;

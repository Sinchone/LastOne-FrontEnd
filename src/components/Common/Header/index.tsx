import React from 'react';
import Logo from '@assets/icon/logo.svg';
import Alarm from '@assets/icon/alarm.svg';
import User from '@assets/icon/user.svg';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <S.NavContainer>
        <Logo />
      </S.NavContainer>
      <S.UserNav>
        <S.Button>글쓰기</S.Button>
        <Alarm />
        <span>프로필</span>
      </S.UserNav>
    </S.Header>
  );
};

export default Header;

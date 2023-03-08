import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <S.NavContainer>
        <S.Nav>라스트원</S.Nav>
        <S.Nav>파트너 찾기</S.Nav>
        <S.Nav>채팅</S.Nav>
        <S.Nav>신청 목록</S.Nav>
      </S.NavContainer>
      <S.UserNav>
        <span>알림</span>
        <span>로그인</span>
      </S.UserNav>
    </S.Header>
  );
};

export default Header;

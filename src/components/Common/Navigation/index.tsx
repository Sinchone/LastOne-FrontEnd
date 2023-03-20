import React, { useState, useEffect } from 'react';
import HomeIcon from '@assets/icon/home.svg';
import PartnerIcon from '@assets/icon/partner.svg';
import ChattingIcon from '@assets/icon/chatting.svg';
import ApplyIcon from '@assets/icon/apply.svg';
import * as S from './style';

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  return (
    <S.Wrapper>
      <S.NavList>
        <S.HomeNav>
          <HomeIcon />
          <span>홈</span>
        </S.HomeNav>
        <S.Nav>
          <PartnerIcon />
          <span>파트너 찾기</span>
        </S.Nav>
        <S.Nav>
          <ChattingIcon />
          <span>채팅</span>
        </S.Nav>
        <S.Nav>
          <ApplyIcon />
          <span>신청목록</span>
        </S.Nav>
      </S.NavList>
    </S.Wrapper>
  );
};

export default Navigation;

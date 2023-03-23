import React from 'react';
import * as S from './style';
import LeftArrow from '@assets/icon/left-arrow.svg';

const UploadNav = () => {
  return (
    <S.NavContainer>
      <S.NavBackBtn>
        <LeftArrow />
      </S.NavBackBtn>
      <S.NavTitle>글쓰기</S.NavTitle>
    </S.NavContainer>
  );
};

export default UploadNav;

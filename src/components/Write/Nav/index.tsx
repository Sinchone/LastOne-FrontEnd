import React from 'react';
import * as S from './style';

const WriteNav = () => {
  return (
    <S.NavContainer>
      <S.NavBackBtn>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
        </svg>
      </S.NavBackBtn>
      <S.NavTitle>글쓰기</S.NavTitle>
    </S.NavContainer>
  );
};

export default WriteNav;

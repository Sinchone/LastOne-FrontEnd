import React from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';

const Input = () => {
  return (
    <S.SearchInput>
      <SearchIcon />
      <input placeholder="제목과 헬스장을 검색해보세요." autoFocus />
    </S.SearchInput>
  );
};

export default Input;

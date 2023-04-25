import React from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';
import CloseIcon from '@assets/icon/close.svg';

const History = () => {
  return (
    <S.Wrapper>
      <S.SearchHistory>
        <SearchIcon />
        <span>스포애니 성산점</span>
      </S.SearchHistory>
      <CloseIcon />
    </S.Wrapper>
  );
};

export default History;

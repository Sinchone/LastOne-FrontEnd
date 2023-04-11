import React from 'react';
import * as S from './style';
import ChattingItem from '../ChattingItem';

const ChattingList = () => {
  return (
    <S.Wrapper>
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
      <ChattingItem />
    </S.Wrapper>
  );
};

export default ChattingList;

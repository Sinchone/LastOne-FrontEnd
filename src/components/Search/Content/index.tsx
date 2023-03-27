import React from 'react';
import * as S from './style';
import { Input, History } from '@components/Search';

const Content = () => {
  return (
    <S.Wrapper>
      <Input />
      <S.HistoryWrapper>
        {Array.from({ length: 6 }, () => 0).map((el) => (
          <History key={el} />
        ))}
      </S.HistoryWrapper>
    </S.Wrapper>
  );
};

export default Content;

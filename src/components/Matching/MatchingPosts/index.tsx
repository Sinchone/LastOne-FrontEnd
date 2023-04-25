import React from 'react';
import { Card } from '@components/Common';
import * as S from './style';

const MatchingPosts = () => {
  return (
    <S.Wrapper>
      <S.CardList>
        {Array.from({ length: 9 }, (_, index) => index).map((el) => (
          <Card key={el} size={'matching'} />
        ))}
      </S.CardList>
    </S.Wrapper>
  );
};

export default MatchingPosts;

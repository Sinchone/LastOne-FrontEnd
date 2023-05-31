import React from 'react';
import * as S from './style';

interface Props {
  order: number;
}

const SlideDot = ({ order }: Props) => {
  return (
    <S.Wrapper>
      {[1, 2, 3].map((value) => {
        return <S.Dot key={value} isCenter={value === order} />;
      })}
    </S.Wrapper>
  );
};

export default SlideDot;

import React from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import RightArrow from '@assets/icon/right-arrow.svg';
import SlideDot from '../SlideDot';

interface Props {
  order: number;
  label: string;
  destination: string;
}

const SlideItem = ({ order, label, destination }: Props) => {
  const router = useRouter();

  return (
    <S.Wrapper imgUrl={`/images/banner-${order}.png`}>
      <S.Label>{label}</S.Label>
      <S.Button onClick={() => router.push(destination)}>
        {order === 1 ? '헬스장 등록' : '파트너 찾기'}
        <RightArrow />
      </S.Button>
      <SlideDot order={order} />
    </S.Wrapper>
  );
};

export default SlideItem;

import React from 'react';
import SlideItem from '../SlideItem';
import { MY_PAGE, MATCHING_PAGE } from '@constants/route';
import * as S from './style';

const SlideItemList = () => {
  return (
    <S.Wrapper>
      <SlideItem order={1} label={'내 주변 헬스장 등록하기'} destination={MY_PAGE} />
      <SlideItem order={2} label={'같이 운동해요 파트너 찾기'} destination={MATCHING_PAGE} />
      <SlideItem order={3} label={'파트너와 함께 라스트 원!'} destination={MATCHING_PAGE} />
    </S.Wrapper>
  );
};

export default SlideItemList;

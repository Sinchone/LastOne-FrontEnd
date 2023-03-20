import React from 'react';
import RightArrowIcon from '@assets/icon/right-arrow.svg';
import { Card } from '@components/Common';
import * as S from './style';

const Contents = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          <span>오늘의 약속</span>
          <RightArrowIcon />
        </S.Title>
        <S.PromiseContents>
          <S.PromiseContent>
            <span>파트너</span>
            <span className="description">차무식 님</span>
          </S.PromiseContent>
          <S.Contour />
          <S.PromiseContent>
            <span>운동부위</span>
            <span className="description">어깨</span>
          </S.PromiseContent>
          <S.Contour />
          <S.PromiseContent>
            <span>운동날짜</span>
            <span className="description">2023.03.03.20:00</span>
          </S.PromiseContent>
          <S.Contour />
          <S.PromiseContent>
            <span>위치</span>
            <span className="description">스포애니 성산점</span>
          </S.PromiseContent>
        </S.PromiseContents>
      </S.Content>
      <S.Content>
        <S.Title>
          <span>파트너 찾기</span>
          <RightArrowIcon />
        </S.Title>
        <S.CardList>
          {Array.from({ length: 9 }, (_, index) => index).map((el) => (
            <Card key={el} />
          ))}
        </S.CardList>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contents;

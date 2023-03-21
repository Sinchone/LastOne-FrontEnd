import React from 'react';
import MapMarkerIcon from '@assets/icon/mapmarker.svg';
import * as S from './style';

interface Props {
  size: 'main' | 'matching';
}

const Card = ({ size }: Props) => {
  return (
    <S.Wrapper size={size}>
      <S.ImgBox>
        <S.Badge>
          <S.Recruit>모집중</S.Recruit>
          <S.Gender>남성만</S.Gender>
        </S.Badge>
      </S.ImgBox>
      <S.Description>
        <span className="title">함께 운동해용</span>
        <span>
          <MapMarkerIcon />
          스포애니 성산점
        </span>
        <span>운동날짜 2023.03.03 20:00</span>
      </S.Description>
    </S.Wrapper>
  );
};

export default Card;

import React from 'react';
import * as S from './style';
import { MapContainer } from '../Map';

const ContentsContainer = () => {
  return (
    <S.WriteContainer>
      <S.TitleContainer>
        <S.TitleInput placeholder="제목" />
      </S.TitleContainer>

      <S.TimeContainer>
        <S.DateWrapper>
          <div>달력</div>
          <div>운동 날짜</div>
        </S.DateWrapper>
        <S.TimeWrapper>
          <div>시계</div>
          <div>운동 시간</div>
        </S.TimeWrapper>
      </S.TimeContainer>

      <MapContainer />
    </S.WriteContainer>
  );
};

export default ContentsContainer;

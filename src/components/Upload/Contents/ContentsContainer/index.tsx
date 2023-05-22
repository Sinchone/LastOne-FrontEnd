import React from 'react';
import * as S from './style';
import { MapContainer } from '../Map';
import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import ImgContainer from '../ContentsImg';
import { useBottomSheet } from '@hooks/common';

const ContentsContainer = () => {
  const { showBottomSheet } = useBottomSheet();

  return (
    <S.WriteContainer>
      <S.TitleContainer>
        <S.TitleInput placeholder="제목" />
      </S.TitleContainer>

      <S.TimeContainer onClick={() => showBottomSheet('Calandar')}>
        <S.DateWrapper>
          <CalendarIcon />
          <p>운동 날짜</p>
        </S.DateWrapper>
        <S.TimeWrapper>
          <ClockIcon />
          <p>운동 시간</p>
        </S.TimeWrapper>
      </S.TimeContainer>

      <MapContainer />
      <ImgContainer />

      <S.UploadBtn>업로드</S.UploadBtn>
    </S.WriteContainer>
  );
};

export default ContentsContainer;

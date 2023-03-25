import React, { useState } from 'react';
import * as S from './style';

import Calendar from '@assets/icon/calendar.svg';
import BottomArrow from '@assets/icon/bottom-arrow.svg';
import TopArrow from '@assets/icon/top-arrow.svg';

const Accodian = () => {
  const [dateAccodianOpen, setDateAccodianOpen] = useState(false);
  const [timeAccodianOpen, setTimeAccodianOpen] = useState(true);

  return (
    <S.AccodianContainer>
      <S.DateContainer>
        <S.AccodianNavContainer>
          <S.AccodianTitle>
            <Calendar />
            운동 날짜 선택
          </S.AccodianTitle>
          {dateAccodianOpen ? (
            <BottomArrow
              onClick={() => {
                setDateAccodianOpen(!dateAccodianOpen);
                setTimeAccodianOpen(!timeAccodianOpen);
              }}
            />
          ) : (
            <TopArrow
              onClick={() => {
                setDateAccodianOpen(!dateAccodianOpen);
                setTimeAccodianOpen(!timeAccodianOpen);
              }}
            />
          )}
        </S.AccodianNavContainer>
      </S.DateContainer>

      <S.TimeContainer>
        <S.AccodianNavContainer>
          <S.AccodianTitle>
            <Calendar />
            운동 날짜 선택
          </S.AccodianTitle>
          {timeAccodianOpen ? (
            <BottomArrow
              onClick={() => {
                setDateAccodianOpen(!dateAccodianOpen);
                setTimeAccodianOpen(!timeAccodianOpen);
              }}
            />
          ) : (
            <TopArrow
              onClick={() => {
                setDateAccodianOpen(!dateAccodianOpen);
                setTimeAccodianOpen(!timeAccodianOpen);
              }}
            />
          )}
        </S.AccodianNavContainer>
      </S.TimeContainer>
    </S.AccodianContainer>
  );
};

export default Accodian;

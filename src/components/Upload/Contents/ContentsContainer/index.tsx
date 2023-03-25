import React, { useCallback, useRef, useState } from 'react';
import * as S from './style';
import { MapContainer } from '../Map';

import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import ImgContainer from '../ContentsImg';
import BottomSheet from '../BottomSheet/BottomSheetContainer';

const ContentsContainer = () => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.WriteContainer>
      <S.TitleContainer>
        <S.TitleInput placeholder="제목" />
      </S.TitleContainer>

      <S.TimeContainer
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <S.DateWrapper>
          <CalendarIcon />
          <p>운동 날짜</p>
        </S.DateWrapper>
        <S.TimeWrapper>
          <ClockIcon />
          <p>운동 시간</p>
        </S.TimeWrapper>
      </S.TimeContainer>

      {isModalOpen && <BottomSheet setIsModalOpen={setIsModalOpen} />}

      <MapContainer />
      <ImgContainer />

      <S.Description placeholder="내용을 입력해주세요." ref={textRef} onInput={handleResizeHeight} />

      <S.UploadBtn>업로드</S.UploadBtn>
    </S.WriteContainer>
  );
};

export default ContentsContainer;

import React from 'react';
import * as S from './style';

const WriteContents = () => {
  return (
    <div>
      <S.ContentsTitleContainer>
        <S.ContentsTitle placeholder="제목" />
      </S.ContentsTitleContainer>
      <S.ContentsTimeContainer>
        <div>
          <div>달력</div>
          <div>운동 날짜</div>
        </div>
        <div>
          <div>시계</div>
          <div>운동 시간</div>
        </div>
      </S.ContentsTimeContainer>
    </div>
  );
};

export default WriteContents;

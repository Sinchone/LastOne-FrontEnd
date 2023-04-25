import React from 'react';
import * as S from './style';
import AddMessage from '@assets/icon/addImg.svg';

const ImgContainer = () => {
  const isImg = false;

  return (
    <S.ImgWrapper>
      <S.ImgTitle>상세설명</S.ImgTitle>
      <S.AddImgContainer>
        {isImg ? (
          <>
            <S.AddImg />
            <S.AddImg />
            <S.AddImg />
          </>
        ) : (
          <S.AddMessageWrapper>
            <AddMessage />
          </S.AddMessageWrapper>
        )}
      </S.AddImgContainer>
    </S.ImgWrapper>
  );
};

export default ImgContainer;

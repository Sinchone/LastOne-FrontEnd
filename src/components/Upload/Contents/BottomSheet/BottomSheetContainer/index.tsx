import React from 'react';
import Accodian from '../Accodian';
import * as S from './style';

const BottomSheet = ({ setIsModalOpen }) => {
  return (
    <S.ModalContainer>
      <S.ModalBody>
        <Accodian />

        <S.BtnContainer>
          <S.CancelBtn
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            취소
          </S.CancelBtn>
          <S.ApplyBtn>적용</S.ApplyBtn>
        </S.BtnContainer>
      </S.ModalBody>
    </S.ModalContainer>
  );
};

export default BottomSheet;

import { useState, useEffect } from 'react';
import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';
import Check from '@assets/icon/check.svg';
import RightArrow from '@assets/icon/right-arrow.svg';

interface Props {
  isOpen: boolean;
  hasArrow?: boolean;
  handleClose: () => void;
  handleConfirm?: () => void;
  handleCancel?: () => void;
  isSuccess?: boolean;
  setIsSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
  buttonColor?: 'blue' | 'red' | 'green';
  text: {
    label?: string;
    confirm?: string;
    cancel?: string;
    success?: string;
  };
}

const Modal = ({
  isOpen,
  hasArrow,
  handleClose,
  handleConfirm,
  handleCancel,
  isSuccess,
  setIsSuccess,
  buttonColor = 'blue',
  text,
}: Props) => {
  if (Object.keys(text).length === 1 && text.success) {
    isSuccess = isOpen;
    setIsSuccess = handleClose;
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess && setIsSuccess(false);
        handleClose();
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess, setIsSuccess, handleClose]);

  const confirmModal = (
    <S.Wrapper>
      <S.Label>{text.label}</S.Label>
      <S.ButtonContainer>
        <S.Button onClick={handleConfirm} color={buttonColor}>
          {text.confirm}
          {hasArrow && <RightArrow />}
        </S.Button>
        <S.Button onClick={handleCancel || handleClose} color={'gray'}>
          {text.cancel}
          {hasArrow && <RightArrow />}
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );

  const successModal = (
    <S.Wrapper>
      <Check />
      {text.success}
    </S.Wrapper>
  );

  return (
    <ModalLayout isOpen={isOpen} handleClose={handleClose}>
      {isSuccess ? successModal : confirmModal}
    </ModalLayout>
  );
};

export default Modal;

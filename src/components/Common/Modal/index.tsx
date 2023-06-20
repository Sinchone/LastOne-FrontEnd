import { useState, useEffect } from 'react';
import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';
import Check from '@assets/icon/check.svg';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  buttonColor?: 'blue' | 'red' | 'green';
  text: {
    label: string;
    confirm: string;
    cancel: string;
    success?: string;
  };
}

const Modal = ({ isOpen, handleClose, handleConfirm, buttonColor = 'blue', text }: Props) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    handleConfirm();
    if (text.success) setIsSuccess(true);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
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
        <S.Button onClick={handleClick} color={buttonColor}>
          {text.confirm}
        </S.Button>
        <S.Button onClick={handleClose} color={'gray'}>
          {text.cancel}
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

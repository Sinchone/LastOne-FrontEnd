import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';
import Check from '@assets/icon/check.svg';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const SuccessModal = ({ children, isOpen, handleClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleClose]);

  return (
    <ModalLayout isOpen={isOpen} handleClose={handleClose}>
      <S.Wrapper>
        <Check />
        {children}
      </S.Wrapper>
    </ModalLayout>
  );
};

export default SuccessModal;

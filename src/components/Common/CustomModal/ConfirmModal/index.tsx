import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  label: string;
}

const ConfirmModal = ({ children, isOpen, handleClose, label }: Props) => {
  return (
    <ModalLayout isOpen={isOpen} handleClose={handleClose}>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.ButtonContainer>{children}</S.ButtonContainer>
      </S.Wrapper>
    </ModalLayout>
  );
};

export default ConfirmModal;

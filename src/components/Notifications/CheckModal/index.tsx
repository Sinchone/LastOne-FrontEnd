import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';

interface Props {
  deleteAll?: boolean;
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const CheckModal = ({ deleteAll, isOpen, handleClose, handleConfirm }: Props) => {
  const text = deleteAll
    ? { label: '알림을 전체 삭제할까요?', confirm: '전체 삭제하기', cancel: '취소하기' }
    : { label: '선택된 항목을 삭제할까요?', confirm: '삭제하기', cancel: '재선택하기' };

  return (
    <ModalLayout isOpen={isOpen} handleClose={handleClose}>
      <S.Wrapper>
        <S.Label>{text.label}</S.Label>
        <S.ButtonContainer>
          <S.Button onClick={handleConfirm}>{text.confirm}</S.Button>
          <S.Button cancel onClick={handleClose}>
            {text.cancel}
          </S.Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </ModalLayout>
  );
};

export default CheckModal;

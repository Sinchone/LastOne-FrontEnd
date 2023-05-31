import * as S from './style';
import { createPortal } from 'react-dom';

interface Modal {
  isOpen: boolean;
  handleClose: () => void;
  handleClick?: () => void;
  children: React.ReactNode;
}

const ModalLayout = ({ children, isOpen, handleClose }: Modal) => {
  const handleClick = () => {
    handleClose();
  };

  const portalDiv = document.querySelector('#modal-root');
  if (!portalDiv) return null;

  return (
    <>
      {isOpen &&
        createPortal(
          <S.Wrapper>
            <S.Overlay onClick={handleClick} />
            <S.Box>{children}</S.Box>
          </S.Wrapper>,
          portalDiv
        )}
    </>
  );
};

export default ModalLayout;

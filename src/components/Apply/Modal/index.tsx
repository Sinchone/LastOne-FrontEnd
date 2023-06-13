import * as S from './style';
import ModalLayout from '@components/Common/ModalLayout';
import Check from '@assets/icon/check.svg';
import { useState, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  menu: string;
  type: string;
}

const Modal = ({ isOpen, handleClose, menu, type }: Props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const messages = {
    received: {
      default: {
        check: '"닉네임"님을 파트너로\n매칭 하시겠어요?',
        confirm: '매칭하기',
        success: '성공적으로\n매칭 되었습니다!',
        color: 'blue',
      },
      cancel: {
        check: '"닉네임"님과 파트너를\n취소 하시겠어요?',
        confirm: '취소하기',
        success: '성공적으로\n취소되었습니다.',
        color: 'red',
      },
    },
    requested: {
      default: {
        check: '파트너에게 취소\n요청을 보내시겠어요?',
        confirm: '취소요청',
        success: '파트너에게\n취소요청을 보냈습니다!',
        color: 'red',
      },
      cancel: {
        check: '정말로 파트너 매칭 신청을\n취소하시겠어요?',
        confirm: '신청취소',
        success: '성공적으로\n취소되었습니다!',
        color: 'green',
      },
    },
  };

  const handleText = () => {
    if (menu === 'received') {
      return type === 'cancel' ? messages.received.cancel : messages.received.default;
    } else {
      return type === 'cancel' ? messages.requested.cancel : messages.requested.default;
    }
  };

  const handleConfirm = () => {
    setIsSuccess(true);
  };

  // 성공 모달은 2초 후 자동 close
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

  const check = (
    <S.Wrapper>
      <S.Label>{handleText()?.check}</S.Label>
      <S.ButtonContainer>
        <S.Button onClick={handleConfirm} color={handleText().color}>
          {handleText().confirm}
        </S.Button>
        <S.Button cancel onClick={handleClose}>
          아니오
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );

  const success = (
    <S.Wrapper>
      <Check />
      {handleText().success}
    </S.Wrapper>
  );

  return (
    <ModalLayout isOpen={isOpen} handleClose={handleClose}>
      {isSuccess ? success : check}
    </ModalLayout>
  );
};

export default Modal;

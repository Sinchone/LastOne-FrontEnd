import { useState } from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import { useRouter } from 'next/router';
import CheckModal from '../CheckModal';
import Toast from '../Toast';
import { deleteNotification } from '@apis/notification';

interface Props {
  isSelecting: boolean;
  setIsSelecting: React.Dispatch<React.SetStateAction<boolean>>;
  selectedList: number[];
}

const Header = ({ isSelecting, setIsSelecting, selectedList }: Props) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const handleRouteBack = () => {
    router.back();
  };

  const handleIsSelecting = () => {
    if (!isSelecting) {
      setIsSelecting(true);
      return;
    }

    if (!selectedList.length) {
      setIsSelecting(false);
      alert('선택한 알림이 없습니다.');
      return;
    }

    setIsModal(true);
  };

  const handleConfirm = () => {
    setIsSelecting(false);
    setIsModal(false);

    deleteNotification(selectedList).then(() => {
      setIsToast(true);
      router.reload();
      console.log(`deleted list: ${selectedList}`);
    });
  };

  return (
    <S.Wrapper>
      <S.BackButton>
        <LeftArrowIcon onClick={() => (isSelecting ? setIsSelecting(false) : handleRouteBack())} />
      </S.BackButton>
      <S.Title>알림</S.Title>
      <S.DeleteButton onClick={handleIsSelecting}>{isSelecting ? '선택완료' : '삭제'}</S.DeleteButton>
      {isModal && <CheckModal isOpen={isModal} handleClose={() => setIsModal(false)} handleConfirm={handleConfirm} />}
      {isToast && <Toast setIsExist={setIsToast}>삭제가 완료되었습니다!</Toast>}
    </S.Wrapper>
  );
};

export default Header;

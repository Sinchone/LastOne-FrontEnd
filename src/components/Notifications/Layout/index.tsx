import { useRouter } from 'next/router';
import { useState } from 'react';
import * as S from './style';
import { deleteNotification } from '@apis/notification';
import useGetNotificationList from '@hooks/notification/queries/useGetNotification';
import { Header, Loader } from '@components/Common';
import Content from '@components/Notifications/Content';
import CheckModal from '@components/Notifications/CheckModal';
import Toast from '@components/Notifications/Toast';

const Notifications = () => {
  const router = useRouter();
  const { data: notificationList, isLoading, isSuccess } = useGetNotificationList();

  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedList, setSelectedList] = useState<number[]>([]);

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

  if (!isSuccess) return null;
  if (isLoading) return <Loader />;

  return (
    <S.Wrapper>
      <Header
        text="알림"
        handleClickLeft={() => (isSelecting ? setIsSelecting(false) : router.back())}
        right={<S.DeleteButton onClick={handleIsSelecting}>{isSelecting ? '선택완료' : '삭제'}</S.DeleteButton>}
      />
      <Content
        notificationList={notificationList.data}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        setSelectedList={setSelectedList}
      />
      {isModal && <CheckModal isOpen={isModal} handleClose={() => setIsModal(false)} handleConfirm={handleConfirm} />}
      {isToast && <Toast setIsExist={setIsToast}>삭제가 완료되었습니다!</Toast>}
    </S.Wrapper>
  );
};

export default Notifications;

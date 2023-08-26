import { useState } from 'react';
import * as S from './style';
import Notification from '../Notification';
import Checked from '@assets/icon/checked.svg';
import UnChecked from '@assets/icon/unchecked.svg';
import CheckModal from '../CheckModal';
import Toast from '../Toast';
import { NotificationType } from '@typing/notification';
import { deleteNotification, readNotification } from '@apis/notification';
import { useRouter } from 'next/router';

interface Props {
  notificationList: NotificationType[];
  isSelecting: boolean;
  setIsSelecting: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedList: React.Dispatch<React.SetStateAction<number[]>>;
}

const Content = ({ notificationList, isSelecting, setIsSelecting, setSelectedList }: Props) => {
  const router = useRouter();
  const [isRequestOnly, setIsRequestOnly] = useState(false);
  const [isCancelOnly, setIsCancelOnly] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const [filterOption, setFilterOption] = useState<'MATCHING_REQUEST' | 'MATCHING_CANCEL' | null>(null);

  const handleClickNotification = (notification: NotificationType) => {
    readNotification(notification.notificationId);

    if (notification.notificationType === 'MATCHING_SUCCESS')
      router.push({ pathname: '/apply', query: { menu: 'requested' } });
    else router.push({ pathname: '/apply', query: { menu: 'received' } });
  };

  // 전체 삭제
  const handleConfirm = () => {
    const deletedList = getFilteredNotificationList().map((notification) => notification.notificationId);

    setIsSelecting(false);
    setIsModal(false);

    deleteNotification(deletedList).then(() => {
      setIsToast(true);
      console.log(`deleted list: ${deletedList}`);
    });
  };

  const handleOption = (option: string) => {
    if (option === 'request') {
      setIsRequestOnly((prev) => !prev);
      setIsCancelOnly(false);
      setFilterOption(isRequestOnly ? null : 'MATCHING_REQUEST');
      return;
    }

    if (option === 'cancel') {
      setIsCancelOnly((prev) => !prev);
      setIsRequestOnly(false);
      setFilterOption(isCancelOnly ? null : 'MATCHING_CANCEL');
      return;
    }

    setFilterOption(null);
  };

  const getFilteredNotificationList = () => {
    if (!filterOption) return notificationList;
    return notificationList.filter((notification) => notification.notificationType === filterOption);
  };

  return (
    <S.Wrapper>
      <S.Option>
        <div>
          <S.SelectBox>
            <div onClick={() => handleOption('request')}>{isRequestOnly ? <Checked /> : <UnChecked />}</div>
            <p>매칭신청만</p>
          </S.SelectBox>
          <S.SelectBox>
            <div onClick={() => handleOption('cancel')}>{isCancelOnly ? <Checked /> : <UnChecked />}</div>
            <p>매칭취소만</p>
          </S.SelectBox>
        </div>
        {isSelecting && <span onClick={() => setIsModal(true)}>전체삭제</span>}
        {isModal && (
          <CheckModal deleteAll isOpen={isModal} handleClose={() => setIsModal(false)} handleConfirm={handleConfirm} />
        )}
      </S.Option>
      <S.NotificationContainer>
        {getFilteredNotificationList().length ? (
          getFilteredNotificationList().map((notification) => (
            <div key={notification.notificationId} onClick={() => handleClickNotification(notification)}>
              <Notification data={notification} isSelecting={isSelecting} setSelected={setSelectedList} />
            </div>
          ))
        ) : (
          <S.Empty />
        )}
      </S.NotificationContainer>
      {isToast && <Toast setIsExist={setIsToast}>전체 삭제가 완료되었습니다!</Toast>}
    </S.Wrapper>
  );
};

export default Content;

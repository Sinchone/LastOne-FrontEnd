import { useState } from 'react';
import * as S from './style';
import Notification from '../Notification';
import Checked from '@assets/icon/checked.svg';
import UnChecked from '@assets/icon/unchecked.svg';
import CheckModal from '../CheckModal';
import Toast from '../Toast';

interface Props {
  isSelecting: boolean;
  setIsSelecting: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedList: React.Dispatch<React.SetStateAction<number[]>>;
}

const dummy = [
  {
    notificationId: 1,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 2,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 3,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 4,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 5,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 6,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 7,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 8,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 9,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 10,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 11,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 12,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 13,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 14,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: true,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 15,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 16,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 17,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_REQUEST',
    isRead: false,
    requestDate: '2023.05.07',
  },
  {
    notificationId: 18,
    recruitmentId: 148,
    recruitmentTitle: '수정내',
    senderNickname: 'test4',
    notificationType: 'MATCHING_CANCEL',
    isRead: false,
    requestDate: '2023.05.07',
  },
];

const Content = ({ isSelecting, setIsSelecting, setSelectedList }: Props) => {
  const [isRequestOnly, setIsRequestOnly] = useState(false);
  const [isCancelOnly, setIsCancelOnly] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const requestOnly = dummy.filter((item) => item.notificationType === 'MATCHING_REQUEST');
  const cancelOnly = dummy.filter((item) => item.notificationType === 'MATCHING_CANCEL');
  const notifications = isRequestOnly ? requestOnly : isCancelOnly ? cancelOnly : dummy;

  const handleConfirm = () => {
    setIsSelecting(false);
    setIsModal(false);

    // 삭제가 완료되었다면,
    const deletedList = notifications.map((item) => item.notificationId);
    setIsToast(true);
    console.log(`deleted list: ${deletedList}`);
  };

  const handleOption = (option: string) => {
    if (option === 'request') {
      setIsRequestOnly((prev) => !prev);
      setIsCancelOnly(false);
    }

    if (option === 'cancel') {
      setIsCancelOnly((prev) => !prev);
      setIsRequestOnly(false);
    }
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
        {notifications.length ? (
          notifications.map((item) => (
            <div key={item.notificationId} onClick={() => console.log('read')}>
              <Notification data={item} isSelecting={isSelecting} setSelected={setSelectedList} />
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

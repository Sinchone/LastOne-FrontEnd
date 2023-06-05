import { useState, useEffect } from 'react';
import * as S from './style';
import { NotificationType } from '@typing/notification';
import RequestIcon from '@assets/icon/matching-request.svg';
import CancelIcon from '@assets/icon/matching-cancel.svg';
import Checked from '@assets/icon/checked.svg';
import UnChecked from '@assets/icon/unchecked.svg';

interface Props {
  data: NotificationType;
  isSelecting: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

const Notification = ({ data, isSelecting, setSelected }: Props) => {
  const isCanceled = data.notificationType === 'MATCHING_CANCEL';
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isChecked
      ? setSelected((prev) => [...prev, data.notificationId])
      : setSelected((prev) => prev.filter((id) => id !== data.notificationId));
  }, [isChecked, data.notificationId, setSelected]);

  return (
    <S.Wrapper isCanceled={isCanceled} isRead={data.isRead}>
      <S.IconWrapper>{isCanceled ? <CancelIcon /> : <RequestIcon />}</S.IconWrapper>
      <S.Main isCanceled={isCanceled}>
        <p>{isCanceled ? '매칭취소 요청 알림' : '매칭신청 알림'}</p>
        <S.Description>
          <p>
            {data.recruitmentTitle} 매칭 요청{isCanceled && ' 취소'}
          </p>
          <p>
            {data.senderNickname}님의 {isCanceled ? '요청' : '신청'} | {data.requestDate}
          </p>
        </S.Description>
      </S.Main>
      <S.Side>
        {isSelecting ? (
          <div onClick={() => setIsChecked((prev) => !prev)}>{isChecked ? <Checked /> : <UnChecked />}</div>
        ) : (
          <p>58분전</p>
        )}
      </S.Side>
    </S.Wrapper>
  );
};

export default Notification;

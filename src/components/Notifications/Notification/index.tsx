import { useState, useEffect } from 'react';
import * as S from './style';
import { NotificationType } from '@typing/notification';
import RequestIcon from '@assets/icon/matching-request.svg';
import CancelIcon from '@assets/icon/matching-cancel.svg';
import SuccessIcon from '@assets/icon/matching-success.svg';
import Checked from '@assets/icon/checked.svg';
import UnChecked from '@assets/icon/unchecked.svg';

interface Props {
  data: NotificationType;
  isSelecting: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

const Notification = ({ data, isSelecting, setSelected }: Props) => {
  const type = data.notificationType.split('_')[1];
  const [isChecked, setIsChecked] = useState(false);

  const content: { [key: string]: { [key: string]: string | JSX.Element } } = {
    REQUEST: {
      icon: <RequestIcon />,
      title: '매칭신청 알림',
      description: `${data.recruitmentTitle} 매칭 요청`,
      info: `${data.senderNickname}님의 신청 | ${data.requestDate}`,
    },
    CANCEL: {
      icon: <CancelIcon />,
      title: '매칭취소 요청 알림',
      description: `${data.recruitmentTitle} 매칭 요청 취소`,
      info: `${data.senderNickname}님의 신청 | ${data.requestDate}`,
    },
    SUCCESS: {
      icon: <SuccessIcon />,
      title: '매칭성공 알림',
      description: `${data.recruitmentTitle} 매칭 성공!`,
      info: `${data.senderNickname}님의 신청 | ${data.requestDate}`,
    },
  };

  useEffect(() => {
    isChecked
      ? setSelected((prev) => [...prev, data.notificationId])
      : setSelected((prev) => prev.filter((id) => id !== data.notificationId));
  }, [isChecked, data.notificationId, setSelected]);

  return (
    <S.Wrapper type={type} isRead={data.isRead}>
      <S.IconWrapper>{content[type].icon}</S.IconWrapper>
      <S.Main type={type}>
        <p>{content[type].title}</p>
        <S.Description>
          <p>{content[type].description}</p>
          <p>{content[type].info}</p>
        </S.Description>
      </S.Main>
      <S.Side>
        {isSelecting && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsChecked((prev) => !prev);
            }}
          >
            {isChecked ? <Checked /> : <UnChecked />}
          </div>
        )}
      </S.Side>
    </S.Wrapper>
  );
};

export default Notification;

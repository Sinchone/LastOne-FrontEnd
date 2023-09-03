import useGetNotificationList from '@hooks/notification/queries/useGetNotification';
import { useState } from 'react';
import * as S from './style';
import Content from '../Content';
import Header from '../Header';
import { Loader } from '@components/Common';

const Notifications = () => {
  const { data: notificationList, isLoading, isSuccess } = useGetNotificationList();

  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedList, setSelectedList] = useState<number[]>([]);

  if (!isSuccess) return null;
  if (isLoading) return <Loader />;

  return (
    <S.Wrapper>
      <Header isSelecting={isSelecting} setIsSelecting={setIsSelecting} selectedList={selectedList} />
      <Content
        notificationList={notificationList.data}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        setSelectedList={setSelectedList}
      />
    </S.Wrapper>
  );
};

export default Notifications;

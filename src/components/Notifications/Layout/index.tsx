import { useState } from 'react';
import * as S from './style';
import Content from '../Content';
import Header from '../Header';

const Notifications = () => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedList, setSelectedList] = useState<number[]>([]);

  return (
    <S.Wrapper>
      <Header isSelecting={isSelecting} setIsSelecting={setIsSelecting} selectedList={selectedList} />
      <Content isSelecting={isSelecting} setIsSelecting={setIsSelecting} setSelectedList={setSelectedList} />
    </S.Wrapper>
  );
};

export default Notifications;

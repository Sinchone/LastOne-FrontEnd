import React, { useEffect, useState, useRef} from 'react';
import * as S from './style';
import { ChattingBottomSheet } from '@components/Chatting/BottomSheet';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import MenuIcon from '@assets/icon/list.svg';
import { useRouter } from 'next/router';
import { createPortal } from 'react-dom';



interface Props {
  gender: string;
  nickname: string;
  roomId: string;
}

const Header = ({ gender, nickname, roomId }: Props) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  const handleDeleteChatRoom = () => {
    router.push('/chatting').then(() => window.location.reload());
  }

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const mainAreaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainAreaRef.current = document.getElementById('bottomsheet');
  }, []);


  return (
    <S.Wrapper>
      <S.LeftArrowIconWrapper>
        <LeftArrowIcon onClick={handleRouteBack} />
      </S.LeftArrowIconWrapper>
      <S.Nickname>{nickname}</S.Nickname>
      <S.Gender>{gender}</S.Gender>
      <S.MenuIconWrapper  onClick={() => setBottomSheetVisible(true)}>
        <MenuIcon/>
      </S.MenuIconWrapper>
      {isBottomSheetVisible && mainAreaRef.current &&
      createPortal(
        <ChattingBottomSheet onDelete={handleDeleteChatRoom} roomId={roomId} onClose={closeBottomSheet} />,
        mainAreaRef.current
      )} 
    </S.Wrapper>
  );
};

export default Header;

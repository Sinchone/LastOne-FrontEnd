import * as S from './style';
import React from 'react';
import { deleteChattingRoom } from '@apis/chatting';
import BottomSheetIcon from '@assets/icon/bottomsheet.svg';

interface Props {
  onDelete: (roomId: string) => void;
  roomId: string;
  onClose: () => void;
}

export const ChattingBottomSheet = ({ onDelete, roomId, onClose }: Props) => {
  
  const exitChattingRoom = async () => {
    if (!roomId) {
      return;
    }
    try {
      const response = await deleteChattingRoom(roomId);
      console.log(response);
      onDelete(roomId);
    } catch (error) {
      console.error("Error deleting chat room:", error);
    }
  };

  return (
    <S.ModalBackground>
      <S.OutsideArea onClick={onClose} />
      <S.Wrapper>
        <BottomSheetIcon className="icon" />
        <S.BottomSheetContent>
          <S.BottomSheetHeader>
            <span>채팅목록</span>
          </S.BottomSheetHeader>
          <S.ButtonWrapper>
            <S.ExitButton onClick={() => exitChattingRoom()}>채팅방 나가기</S.ExitButton>
          </S.ButtonWrapper>
        </S.BottomSheetContent>
      </S.Wrapper>
    </S.ModalBackground>
  );
};
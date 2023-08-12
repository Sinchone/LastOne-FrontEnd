import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import { useRouter } from 'next/router';
import MenuIcon from '@assets/icon/list.svg';
import { ChattingListType } from '@typing/chatting';
import { createImageUrl } from '@utils/createImageUrl';
import { ChattingBottomSheet } from '@components/Chatting/BottomSheet';
import { calDate } from '@utils/calDate';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState} from 'react';

interface Props {
  chattingList: ChattingListType[];
}

const ChattingList = ({ chattingList: initialChattingList }: Props) => {
  const router = useRouter();
  const [chattingList, setChattingList] = useState<ChattingListType[]>(initialChattingList || []);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const handleDeleteChatRoom = (roomId: string) => {
    setChattingList((prevList) => prevList.filter((chat) => chat.roomId !== roomId));
    setBottomSheetVisible(false); // 바텀시트를 숨깁니다.
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const mainAreaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainAreaRef.current = document.getElementById('bottomsheet');
  }, []);

  return (
    <S.Wrapper>
        {chattingList.length > 0 ? (
          chattingList.map((c) => (
            <S.ChatItemWrapper key={c.roomId}>
              <S.ProfileWrapper>
                <S.ProfileButton
                  onClick={() => {
                    router.push(`/mypage/${c.otherUserId}`);
                  }}
                >
                  <S.ImageWrapper>
                    {c.profileUrl ? (
                      <img src={createImageUrl(c.profileUrl as string)} alt="profileImg" />
                    ) : (
                      <ProfileIcon />
                    )}
                  </S.ImageWrapper>
                </S.ProfileButton>
                <S.NameAndMessage>
                  <span className="name">{c.nickname}</span>
                  <span className="message">{c.lastChat}</span>
                </S.NameAndMessage>
              </S.ProfileWrapper>
              <S.MenuWrapper>
                <S.TimeAndNotRead>
                  <span>{calDate(c.lastChatTime)}</span>
                  <S.NotRead>{c.notReadCount}</S.NotRead>
                </S.TimeAndNotRead>
                <S.MenuIconWrapper
                  onClick={() => {
                    setSelectedRoomId(c.roomId);
                    setBottomSheetVisible(true);
                  }}
                >
                  <MenuIcon />
                </S.MenuIconWrapper>
              </S.MenuWrapper>
            </S.ChatItemWrapper>
          ))
        ) : (
          <S.NoChattingRoom>채팅방이 존재하지 않습니다.</S.NoChattingRoom>
        )}
        {isBottomSheetVisible && selectedRoomId && mainAreaRef.current &&
          createPortal(
            <ChattingBottomSheet onDelete={handleDeleteChatRoom} roomId={selectedRoomId} onClose={closeBottomSheet} />,
            mainAreaRef.current
          )}
    </S.Wrapper>
  );
};

export default ChattingList;

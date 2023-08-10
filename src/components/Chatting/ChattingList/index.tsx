import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import { useRouter } from 'next/router';
import MenuIcon from '@assets/icon/list.svg';
import { ChattingListType } from '@typing/chatting';
import { createImageUrl } from '@utils/createImageUrl';

interface Props {
  chattingList: ChattingListType[];
}

const isToday = (chatDate: Date, currentDate: Date) => {
  return chatDate.getDate() === currentDate.getDate() &&
         chatDate.getMonth() === currentDate.getMonth() &&
         chatDate.getFullYear() === currentDate.getFullYear();
}

const calDate = (input: string) => {
  const chatDate = new Date(input);
  const currentDate = new Date();
  if (isToday(chatDate, currentDate)) {
    const hour = Number(chatDate.getHours());
    const hourInfo = hour < 12 ? `오전 ${hour}` : `오후 ${hour - 12}`;
    return `${hourInfo}:${chatDate.getMinutes().toString().padStart(2, '0')}`;
  }
  return `${chatDate.getFullYear()}-${(chatDate.getMonth() + 1).toString().padStart(2, '0')}-${chatDate.getDate().toString().padStart(2, '0')}`; 
}

const ChattingList = ({ chattingList }: Props) => {

  const router = useRouter();

  return (
    <S.Wrapper>
      {chattingList.length > 0 ? (
        chattingList.map((c) => (
          <S.ChatItemWrapper key={c.roomId}>
            <S.ProfileWrapper>
              <S.ProfileButton onClick={() => {router.push(`/mypage/${c.otherUserId}`);}}>
                <S.ImageWrapper>
                  {c.profileUrl ? (<img src={createImageUrl(c.profileUrl as string)} alt='profileImg'/>)
                  :(<ProfileIcon/>)}
                </S.ImageWrapper>
              </S.ProfileButton>
              <S.NameAndMessage>
                <span className="name">{c.nickname}</span>
                <span className="message">{c.lastChat}</span>
              </S.NameAndMessage>
            </S.ProfileWrapper>
            <S.MenuWrapper>
              <S.TimeAndMenu>
                <span>{calDate(c.lastChatTime)}</span>
                <MenuIcon />
              </S.TimeAndMenu>
              <S.NotRead>{c.notReadCount}</S.NotRead>
            </S.MenuWrapper>
          </S.ChatItemWrapper>
        ))
      ) : (
        <div>채팅 리스트가 존재하지 않습니다.</div>
      )}
    </S.Wrapper>
  );
};

export default ChattingList;

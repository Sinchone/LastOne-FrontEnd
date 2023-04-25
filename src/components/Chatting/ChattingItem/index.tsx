import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import MenuIcon from '@assets/icon/list.svg';

const ChattingItem = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <ProfileIcon />
        <S.NameAndMessage>
          <span className="name">운동관</span>
          <span className="message">안녕하세요 혹시 파트너 신청 취소할 수 있을까요?</span>
        </S.NameAndMessage>
      </S.ProfileWrapper>
      <S.MenuWrapper>
        <S.TimeAndMenu>
          <span>5분전</span>
          <MenuIcon />
        </S.TimeAndMenu>
        <S.NotRead>1</S.NotRead>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};

export default ChattingItem;

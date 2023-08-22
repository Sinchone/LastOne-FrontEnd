import React from 'react';
import Link from 'next/link';
import HomeIcon from '@assets/icon/home.svg';
import UnClickedHome from '@assets/icon/unclick-home.svg';
import MatchingIcon from '@assets/icon/matching.svg';
import PartnerIcon from '@assets/icon/partner.svg';
import ChattingIcon from '@assets/icon/chatting.svg';
import ChattingIconUnread from '@assets/icon/chattingUnread.svg';
import ApplyIcon from '@assets/icon/apply.svg';
import { MAIN_PAGE, MATCHING_PAGE, CHATTING_PAGE, APPLY_PAGE } from '@constants/route';
import * as S from './style';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isReadChattingState } from '@recoil/chatting'

const Navigation = () => {
  const [isRead, setIsRead] = useRecoilState(isReadChattingState);
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <S.Wrapper>
      <S.NavList>
        <Link href={MAIN_PAGE}>
          <S.HomeNav isLocated={pathName === MAIN_PAGE}>
            {pathName === MAIN_PAGE ? <HomeIcon /> : <UnClickedHome />}
            <span>홈</span>
          </S.HomeNav>
        </Link>
        <Link href={MATCHING_PAGE}>
          <S.Nav isLocated={pathName === MATCHING_PAGE}>
            {pathName === MATCHING_PAGE ? <MatchingIcon /> : <PartnerIcon />}
            <span>파트너 찾기</span>
          </S.Nav>
        </Link>
        <Link href={CHATTING_PAGE}>
          <S.Nav isLocated={pathName === CHATTING_PAGE}>
            {isRead? 
              <ChattingIcon /> :
              <ChattingIconUnread />
            }
            <span>채팅</span> : 
          </S.Nav>
        </Link>
        <Link href={APPLY_PAGE}>
          <S.Nav isLocated={pathName === APPLY_PAGE}>
            <ApplyIcon />
            <span>신청목록</span>
          </S.Nav>
        </Link>
      </S.NavList>
    </S.Wrapper>
  );
};

export default Navigation;

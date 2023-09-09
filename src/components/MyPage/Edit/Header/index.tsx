import React from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';
import { MY_PAGE } from '@constants/route';
import { useRecoilState } from 'recoil';
import { isMapShowState } from '@recoil/postWrite';

const Header = () => {
  const router = useRouter();
  const [isMapShow, setIsMapShow] = useRecoilState(isMapShowState);

  const handleRouteBack = () => {
    if (isMapShow) setIsMapShow(false);
    else router.replace(MY_PAGE);
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>마이페이지 수정</span>
    </S.Wrapper>
  );
};

export default Header;

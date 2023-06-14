import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import { isMapShowState } from '@recoil/postWrite';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

const Header = () => {
  const router = useRouter();
  const isMapShow = useRecoilValue(isMapShowState);

  const handleRouteBack = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>{isMapShow ? '헬스장 검색' : '글쓰기'}</span>
    </S.Wrapper>
  );
};

export default Header;

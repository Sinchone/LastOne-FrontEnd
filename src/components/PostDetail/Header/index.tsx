import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>게시물 상세</span>
    </S.Wrapper>
  );
};

export default Header;

import * as S from './style';
import UnusableIcon from '@assets/icon/unusable.svg';
import Home from '@assets/icon/loginhome.svg';
import Link from 'next/link';

const Content = () => {
  return (
    <S.Wrapper>
      <UnusableIcon width={100} height={100} viewBox="0.5 0.75 15 15" />
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">
        <S.HomeBtn>
          <Home />
          홈으로 가기
        </S.HomeBtn>
      </Link>
    </S.Wrapper>
  );
};

export default Content;

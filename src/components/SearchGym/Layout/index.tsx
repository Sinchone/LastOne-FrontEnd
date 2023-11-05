import * as S from './style';
import { Header } from '@components/Common';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header text="헬스장 검색" />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Layout;

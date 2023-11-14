import * as S from './style';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Layout;

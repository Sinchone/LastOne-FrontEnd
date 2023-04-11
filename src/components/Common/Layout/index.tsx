import React, { ReactNode } from 'react';
import { Header, Navigation } from '@components/Common';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <Navigation />
    </S.Wrapper>
  );
};

export default Layout;

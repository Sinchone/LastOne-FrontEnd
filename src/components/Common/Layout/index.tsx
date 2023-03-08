import React, { ReactNode } from 'react';
import * as S from './style';
import { Header } from '@components/Common';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
};

export default Layout;

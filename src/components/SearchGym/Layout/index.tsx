import React, { ReactNode } from 'react';
import { Navigation } from '@components/Common';
import { Header } from '@components/SearchGym';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Layout;

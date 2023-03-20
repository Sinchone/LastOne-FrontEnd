import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Layout;

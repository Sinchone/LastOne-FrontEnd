import React, { ReactNode } from 'react';
import { MainHeader, Navigation } from '@components/Common';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      {children}
      <Navigation />
    </>
  );
};

export default MainLayout;

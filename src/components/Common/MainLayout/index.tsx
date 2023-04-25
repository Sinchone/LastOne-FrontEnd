import React, { ReactNode } from 'react';
import { Header, Navigation } from '@components/Common';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Navigation />
    </>
  );
};

export default MainLayout;

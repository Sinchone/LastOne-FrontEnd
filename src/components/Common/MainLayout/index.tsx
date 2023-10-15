import React, { ReactNode } from 'react';
import { Header, Layout, Navigation } from '@components/Common';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Header />
      {children}
      <Navigation />
    </Layout>
  );
};

export default MainLayout;

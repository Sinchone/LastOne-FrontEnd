import React from 'react';
import { Header, Navigation, MainLayout } from '@components/Common';
import { Banner, Contents } from '@components/Main';

const Main = () => {
  return (
    <MainLayout>
      <Banner />
      <Contents />
    </MainLayout>
  );
};

export default Main;

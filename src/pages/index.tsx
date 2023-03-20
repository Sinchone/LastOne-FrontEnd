import React from 'react';
import { Header, Navigation } from '@components/Common';
import { Banner, Contents } from '@components/Main';

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Contents />
      <Navigation />
    </>
  );
};

export default Main;

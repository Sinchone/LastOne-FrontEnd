import React, { ReactElement } from 'react';
import { Header, Content } from '@components/MyPage';
import { NextPageWithLayout } from '@pages/_app';
import { Navigation } from '@components/Common';

const MyPage: NextPageWithLayout = () => {
  return <Content />;
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
      <Navigation />
    </>
  );
};

export default MyPage;

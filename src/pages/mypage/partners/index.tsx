import { Content, Header } from '@components/MyPage/PartnerList';
import { NextPageWithLayout } from '@pages/_app';
import React, { ReactElement } from 'react';

const PartnerList: NextPageWithLayout = () => {
  return (
    <>
      <Content />
    </>
  );
};

PartnerList.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default PartnerList;

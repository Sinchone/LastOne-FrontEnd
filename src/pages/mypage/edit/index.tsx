import { Header, Content } from '@components/MyPage/Edit';
import { NextPageWithLayout } from '@pages/_app';
import React, { ReactElement } from 'react';

const EditPage: NextPageWithLayout = () => {
  return <Content />;
};

EditPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default EditPage;

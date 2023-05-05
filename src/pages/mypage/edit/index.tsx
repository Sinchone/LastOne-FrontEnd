import { Header, Content } from '@components/MyPage/Edit';
import { NextPageWithLayout } from '@pages/_app';
import { useGetMyProfile } from '@hooks/MyPage/queries';
import React, { ReactElement } from 'react';

const EditPage: NextPageWithLayout = () => {
  const { data: profile } = useGetMyProfile();

  return <>{profile && <Content profile={profile.data} />}</>;
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

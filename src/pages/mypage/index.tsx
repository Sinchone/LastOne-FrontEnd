import React, { ReactElement } from 'react';
import { Header, Content } from '@components/MyPage';
import { NextPageWithLayout } from '@pages/_app';
import { useGetMyProfile } from '@hooks/MyPage/queries';
import { ProfileType } from '@typing/user';

const MyPage: NextPageWithLayout = () => {
  const { data: user } = useGetMyProfile();

  return <>{user && <Content user={user.data.member} sbd={user.data.sbd} gym={user.data.gyms} />}</>;
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default MyPage;

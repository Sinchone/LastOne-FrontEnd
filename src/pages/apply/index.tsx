import { ReactElement } from 'react';
import { NextPageWithLayout } from '@pages/_app';
import { MainLayout } from '@components/Common';
import { Content } from '@components/Apply';
import { useGetReceivedApplications, useGetRequestedApplications } from '@hooks/application/queries';

const Apply: NextPageWithLayout = () => {
  const { data: requested } = useGetRequestedApplications();
  const { data: received } = useGetReceivedApplications();

  return (
    <>
      {requested && received && <Content requestedApplications={requested.data} receivedApplications={received.data} />}
    </>
  );
};

Apply.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Apply;

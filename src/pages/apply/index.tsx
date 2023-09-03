import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from '@pages/_app';
import { MainLayout } from '@components/Common';
import { Content } from '@components/Apply';
import { useGetReceivedApplications, useGetRequestedApplications } from '@hooks/application/queries';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { currentMenuState } from '@recoil/application';

const Apply: NextPageWithLayout = () => {
  const router = useRouter();
  const setCurrentMenu = useSetRecoilState(currentMenuState);
  const { data: requested } = useGetRequestedApplications();
  const { data: received } = useGetReceivedApplications();

  useEffect(() => {
    const menu = router.query.menu;
    if (['received', 'requested'].includes(menu as string))
      setCurrentMenu(router.query.menu as 'received' | 'requested');
  }, [router.query, setCurrentMenu]);

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

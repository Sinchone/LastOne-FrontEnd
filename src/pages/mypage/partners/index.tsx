import { Content, Header } from '@components/MyPage/PartnerList';
import { useGetPartnerList } from '@hooks/MyPage/queries';
import { Navigation } from '@components/Common';
import { Loader } from '@components/Common';

const PartnerList = () => {
  const { data: partnerListData, isLoading, refetch } = useGetPartnerList();

  if (isLoading || !partnerListData) {
    if (!partnerListData) {
      refetch();
    }
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Content partnerList={partnerListData.data} />
      <Navigation />
    </>
  );
};

export default PartnerList;

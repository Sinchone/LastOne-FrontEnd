import { Content, Header } from '@components/MyPage/PartnerList';
import { useGetPartnerList } from '@hooks/MyPage/queries';
import { Navigation } from '@components/Common';
import { Loader } from '@components/Common';
import { useEffect, useState } from 'react';

const PartnerList = () => {
  const { data: partnerListData, isError, refetch } = useGetPartnerList();
  const [isPossibleToRendering, setIsPossibleToRendering] = useState(false);
  
  useEffect(() => {
    if (isError) {
      setIsPossibleToRendering(true);
    }
    if (partnerListData) {
      setIsPossibleToRendering(true);
    } 
    if (!isPossibleToRendering) {
      refetch();
    }
  }, [isError, partnerListData, isPossibleToRendering, refetch]);

  if (!isPossibleToRendering) {
    return <Loader />;
  }

  const partners = partnerListData?.data;

  return (
    <>
      <Header />
      <Content partnerList={partners} />
      <Navigation />
    </>
  );
};

export default PartnerList;

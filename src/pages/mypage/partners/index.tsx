import { Content } from '@components/MyPage/PartnerList';
import { useGetPartnerList } from '@hooks/MyPage/queries';
import { Navigation } from '@components/Common';
import { Header, Loader } from '@components/Common';
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

  return (
    <>
      <Header text="운동 파트너 목록" />
      <Content partnerList={partnerListData?.data} />
      <Navigation />
    </>
  );
};

export default PartnerList;

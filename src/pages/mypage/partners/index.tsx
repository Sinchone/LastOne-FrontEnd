import { Content, Header } from '@components/MyPage/PartnerList';
import { useEffect, useState } from 'react';
import { getPartnerList } from '@apis/partner';
import { Navigation } from '@components/Common';

const PartnerList = () => {
  const [partnerList, setPartnerList] = useState([]);

  useEffect(() => {
    getPartnerList()
      .then((res) => {
        console.log(res.data);
        setPartnerList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Content partnerList={partnerList} />
      <Navigation />
    </>
  );
};

export default PartnerList;

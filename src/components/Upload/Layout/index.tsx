import { BottomSheet, Layout } from '@components/Common';
import { ContentsContainer } from '../Contents';
import WriteNav from '../Nav';
import { useBottomSheet } from '@hooks/common';

const UploadLayout = () => {
  const { bottomsheet } = useBottomSheet();

  return (
    <Layout>
      <WriteNav />
      <ContentsContainer />
      <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
    </Layout>
  );
};

export default UploadLayout;

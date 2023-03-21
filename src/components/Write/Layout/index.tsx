import { Layout } from '@components/Common';
import { ContentsContainer } from '../Contents';
import WriteNav from '../Nav';

const WriteLayout = () => {
  return (
    <Layout>
      <WriteNav />
      <ContentsContainer />
    </Layout>
  );
};

export default WriteLayout;

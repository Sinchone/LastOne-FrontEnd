import { Layout } from '@components/Common';
import WriteContents from '../Contents';
import WriteNav from '../Nav';

const WriteLayout = () => {
  return (
    <Layout>
      <WriteNav />
      <WriteContents />
    </Layout>
  );
};

export default WriteLayout;

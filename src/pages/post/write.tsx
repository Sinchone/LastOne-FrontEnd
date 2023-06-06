import { Content, Header } from '@components/PostWrite';
import { BottomSheet } from '@components/Common';
import { useBottomSheet } from '@hooks/common';

const PostWrite = () => {
  const { bottomsheet } = useBottomSheet();
  return (
    <>
      <Header />
      <Content />
      <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
    </>
  );
};

export default PostWrite;

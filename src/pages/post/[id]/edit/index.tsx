import { BottomSheet, Loader } from '@components/Common';
import { Header, Content } from '@components/PostWrite';
import useGetPostById from '@hooks/Post/queries/useGetPostById';
import { useBottomSheet } from '@hooks/common';
import { useGetUserInfo } from '@hooks/common/queries';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostEdit = () => {
  const router = useRouter();
  const [postId, setPostId] = useState<number | undefined>();
  const [isSuccess, setIsSuccess] = useState(false);
  const { bottomsheet } = useBottomSheet();

  const { data: post, isLoading } = useGetPostById(Number(postId));
  const { currentUserId } = useGetUserInfo();
  const [isOther, setIsOther] = useState(true);

  useEffect(() => {
    const { id } = router.query;

    setPostId(Number(id) || undefined);
  }, [router.query]);

  useEffect(() => {
    setIsSuccess(post?.status === 200);

    if (post?.status === 200) setIsOther(post.data.data.memberId !== currentUserId);
  }, [post, currentUserId]);

  if (!isSuccess) return null;
  if (isLoading) return <Loader />;
  if (isOther) router.replace(`/post/${postId}`);

  return (
    <>
      <Header isEdit postId={postId} />
      <Content isEdit originalPost={post.data.data} />
      <div id="bottomsheet">{bottomsheet.isOpen && <BottomSheet />}</div>
    </>
  );
};

export default PostEdit;

import { Content, Header } from '@components/PostDetail';
import { useCheckIsApply } from '@hooks/Post/queries';
import useGetPostById from '@hooks/Post/queries/useGetPostById';
import { useGetUserInfo } from '@hooks/common/queries';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const router = useRouter();
  const [postId, setPostId] = useState<number | undefined>();
  const [isSuccess, setIsSuccess] = useState(false);

  const { data: post } = useGetPostById(Number(postId));
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

  if (isSuccess) {
    return (
      <>
        <Header isOther={isOther} postId={postId} />
        <Content isOther={isOther} post={post.data.data} />
      </>
    );
  }

  return <></>;
};

export default PostDetail;

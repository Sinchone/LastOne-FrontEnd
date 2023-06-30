import { Content, Header } from '@components/PostDetail';
import useGetPostById from '@hooks/Post/queries/useGetPostById';
import { useGetUserInfo } from '@hooks/common/queries';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const router = useRouter();
  const [postId, setPostId] = useState<number | undefined>();
  const { data: post } = useGetPostById(Number(postId));

  const { currentUserId } = useGetUserInfo();
  const [isOther, setIsOther] = useState(true);

  useEffect(() => {
    const { id } = router.query;

    setPostId(Number(id) || undefined);
  }, [router.query]);

  useEffect(() => {
    if (post) setIsOther(post.data.data.memberId !== currentUserId);
  }, [post, currentUserId]);

  if (post) {
    return (
      <>
        <Header isOther={isOther} postId={post.data.data.recruitmentId} />
        <Content isOther={isOther} post={post.data.data} />
      </>
    );
  } else return <></>;
};

export default PostDetail;

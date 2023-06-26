import { Content, Header } from '@components/PostDetail';
import useGetPostById from '@hooks/Post/queries/useGetPostById';
import { currentUserState } from '@recoil/userState';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const PostDetail = () => {
  const router = useRouter();
  const [postId, setPostId] = useState<number | undefined>();
  const { data: post } = useGetPostById(Number(postId));

  const currentUser = useRecoilValue(currentUserState);
  const [isOther, setIsOther] = useState(true);

  useEffect(() => {
    const { id } = router.query;

    setPostId(Number(id) || undefined);
  }, [router.query]);

  useEffect(() => {
    if (!currentUser) setIsOther(false);
    else if (post) setIsOther(post.data.data.memberId !== currentUser.id);
  }, [post, currentUser]);

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

import React, { useEffect, useState } from 'react';
import { Header, Content } from '@components/MyPage';
import { useGetOtherProfile } from '@hooks/MyPage/queries';
import { useRouter } from 'next/router';
import { Loader } from '@components/Common';
import { getUserEmailFromToken } from '@utils/getUserEmailFromToken';

const OtherPage = () => {
  const router = useRouter();
  const currentUserEmail = getUserEmailFromToken() || '';
  const [memberId, setMemberId] = useState('');
  const { data: user, isLoading, isError } = useGetOtherProfile(memberId);

  useEffect(() => {
    const { memberId } = router.query;

    if (memberId) setMemberId(memberId as string);
  }, [router.query]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return router.push('/_error');
  }

  if (currentUserEmail === user.data.member.email) {
    router.replace('/mypage');
  }

  if (user) {
    return (
      <>
        <Header nickname={user.data.member.nickname} />
        <Content other user={user.data.member} sbd={user.data.sbd} gym={user.data.gyms} />
      </>
    );
  }
};

export default OtherPage;

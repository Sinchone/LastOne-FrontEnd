import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@components/Common';
import * as S from './style';
import { useGetPostList } from '@hooks/matching/queries';
import { useRouter } from 'next/router';

const MatchingPosts = () => {
  const router = useRouter();
  const [params, setParams] = useState({});
  const { data, fetchNextPage, hasNextPage } = useGetPostList(params);
  const isEmpty = !data?.pages[0].data.data.content.length;
  const bottom = useRef(null);

  useEffect(() => {
    const searchParams = {
      title: router.query.title,
      workoutPart: router.query.workoutPart,
      preferGender: router.query.preferGender,
      date: router.query.date,
      gymName: router.query.gymName,
      isRecruiting: router.query.isRecruiting || false,
    };

    setParams(searchParams);
  }, [router.query]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (bottom.current && hasNextPage) {
      observer = new IntersectionObserver(([entry]) => entry.isIntersecting && fetchNextPage());
      observer.observe(bottom.current);
    }

    return () => observer && observer.disconnect();
  }, [bottom, hasNextPage, fetchNextPage]);

  return (
    <S.Wrapper>
      {isEmpty ? (
        <S.EmptyList />
      ) : (
        <S.CardList>
          {data.pages.map((page: any) => {
            return page.data.data.content.map((content: any) => (
              <Card key={content.id} size={'matching'} {...content} />
            ));
          })}
        </S.CardList>
      )}
      <div ref={bottom} />
    </S.Wrapper>
  );
};

export default MatchingPosts;

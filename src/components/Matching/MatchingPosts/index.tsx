import React, { useEffect, useRef } from 'react';
import { Card } from '@components/Common';
import * as S from './style';
import { useGetPostList } from '@hooks/matching/queries';

const MatchingPosts = () => {
  const { data, fetchNextPage } = useGetPostList({});
  const bottom = useRef(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (bottom.current) {
      observer = new IntersectionObserver(([entry]) => entry.isIntersecting && fetchNextPage());
      observer.observe(bottom.current);
    }

    return () => observer && observer.disconnect();
  }, [bottom, fetchNextPage]);

  return (
    <S.Wrapper>
      <S.CardList>
        {data?.pages &&
          data.pages.map((page: any, idx) => (
            <div key={idx}>
              {page.data.data.content.map((content: any) => (
                <Card key={content.id} size={'matching'} status={'모집중'} preferGender={'성별무관'} {...content} />
              ))}
            </div>
          ))}
      </S.CardList>
      <div ref={bottom} />
    </S.Wrapper>
  );
};

export default MatchingPosts;

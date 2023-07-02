import React from 'react';
import { Card } from '@components/Common';
import * as S from './style';

const MatchingPosts = () => {
  const dummy_data = [
    {
      gym: '판교 헬스장',
      id: 30,
      imgUrl: 'all-main.jpg',
      startedAt: '2023.06.30 13:00',
      title: '3대 250 이상 보조구해요!! ',
      workoutPart: '전신',
    },
    {
      gym: '판교 헬스장',
      id: 30,
      imgUrl: 'all-main.jpg',
      startedAt: '2023.06.30 13:00',
      title: '3대 250 이상 보조구해요!! ',
      workoutPart: '전신',
    },
    {
      gym: '판교 헬스장',
      id: 30,
      imgUrl: 'all-main.jpg',
      startedAt: '2023.06.30 13:00',
      title: '3대 250 이상 보조구해요!! ',
      workoutPart: '전신',
    },
  ];

  return (
    <S.Wrapper>
      <S.CardList>
        {dummy_data.map((el) => (
          <Card key={el.id} size={'matching'} status={'모집중'} preferGender={'성별무관'} {...el} />
        ))}
      </S.CardList>
    </S.Wrapper>
  );
};

export default MatchingPosts;

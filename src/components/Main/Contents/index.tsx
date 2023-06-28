import React, { useEffect, useState } from 'react';
import RightArrowIcon from '@assets/icon/right-arrow.svg';
import { Card } from '@components/Common';
import * as S from './style';
import { useGetTodayPartner } from '@hooks/MainPage/queries';
import useGetPosts from '@hooks/MainPage/queries/useGetPosts';
import { MainPost } from '@typing/post';
import { getAccessTokenFromCookie } from '@utils/token';

const Contents = () => {
  const [todayPartner, setTodayPartner] = useState({
    recruitmentId: null,
    partnerName: '',
    workoutPart: '',
    startedAt: '',
    gym: '',
  });

  const accessToken = getAccessTokenFromCookie();
  const { data: todayPartnerData } = useGetTodayPartner();

  useEffect(() => {
    if (accessToken) {
      console.log('test', todayPartnerData?.data);
      setTodayPartner({ ...todayPartnerData?.data.data });
    }
  }, [accessToken, todayPartnerData]);

  const { data: mainPosts } = useGetPosts();
  const mainPostArray = mainPosts?.data.data;

  return (
    <S.Wrapper>
      {accessToken && mainPostArray && (
        <S.Content>
          <S.Title href={'/apply'}>
            <span>오늘의 약속</span>
            <RightArrowIcon />
          </S.Title>
          <S.PromiseContents>
            <S.PromiseContent>
              <span>파트너</span>
              <span className="description">{todayPartner.partnerName} 님</span>
            </S.PromiseContent>
            <S.Contour />
            <S.PromiseContent>
              <span>운동부위</span>
              <span className="description">{todayPartner.workoutPart}</span>
            </S.PromiseContent>
            <S.Contour />
            <S.PromiseContent>
              <span>운동날짜</span>
              <span className="description">{todayPartner.startedAt}</span>
            </S.PromiseContent>
            <S.Contour />
            <S.PromiseContent>
              <span>위치</span>
              <span className="description">{todayPartner.gym}</span>
            </S.PromiseContent>
          </S.PromiseContents>
        </S.Content>
      )}
      <S.Content>
        <S.Title href={'/matching'}>
          <span>파트너 찾기</span>
          <RightArrowIcon />
        </S.Title>
        <S.CardList>
          {mainPostArray && mainPostArray.length > 0
            ? mainPostArray.map((post: MainPost) => <Card key={post.id} size={'main'} {...post} />)
            : '모집중인 파트너가 없습니다.'}
        </S.CardList>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contents;

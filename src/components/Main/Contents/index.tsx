import React, { useState } from 'react';
import RightArrowIcon from '@assets/icon/right-arrow.svg';
import { Card, Modal } from '@components/Common';
import * as S from './style';
import { useGetTodayPartner } from '@hooks/MainPage/queries';
import useGetPosts from '@hooks/MainPage/queries/useGetPosts';
import { MainPost } from '@typing/post';
import { getAccessTokenFromCookie } from '@utils/token';
import { useRouter } from 'next/router';

const Contents = () => {
  const { data: todayPartnerData } = useGetTodayPartner();
  const { data: mainPosts } = useGetPosts();
  const mainPostArray = mainPosts?.data.data;
  const todayPartner = todayPartnerData?.data;
  const accessToken = getAccessTokenFromCookie();

  const router = useRouter();
  const [isFirstSignUpModal, setIsFirstSignUpModal] = useState(router.query.isFirstSignUp === 'true');

  return (
    <S.Wrapper>
      {accessToken && todayPartner && (
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

      {isFirstSignUpModal && (
        <Modal
          isOpen={isFirstSignUpModal}
          handleClose={() => setIsFirstSignUpModal(false)}
          handleConfirm={() => router.push('/mypage')}
          hasArrow
          text={{
            label: '회원가입을 축하합니다!\n서비스 이용을 위해 정보를 입력해주세요!',
            confirm: '정보 입력하기',
            cancel: '다음에 하기',
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default Contents;

import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/mypage.svg';

const Content = () => {
  return (
    <S.Wrapper>
      <S.ProfileImgWrapper>
        <ProfileIcon />
        <span>사진 편집</span>
      </S.ProfileImgWrapper>
      <S.EditForm>
        <S.Label>닉네임</S.Label>
        <S.Input placeholder="닉네임을 입력해주세요." />
        <S.Label>성별</S.Label>
        <S.GenderWrapper>
          <S.Gender>남성</S.Gender>
          <S.Gender>여성</S.Gender>
        </S.GenderWrapper>
        <S.Label>한줄 소개</S.Label>
        <S.Input placeholder="한줄 소개를 간단하게 입력해주세요." />
        <S.FitnessInfoWrapper>
          <S.FitnessInfo>
            <S.Label>데드리프트</S.Label>
            <S.SmallInput placeholder="입력." />
          </S.FitnessInfo>
          <S.FitnessInfo>
            <S.Label>스쿼트</S.Label>
            <S.SmallInput placeholder="입력." />
          </S.FitnessInfo>
          <S.FitnessInfo>
            <S.Label>벤치프레스</S.Label>
            <S.SmallInput placeholder="입력." />
          </S.FitnessInfo>
        </S.FitnessInfoWrapper>
        <S.GymRegister>
          <S.Label>등록 헬스장</S.Label>
          <S.SearchInput>
            <input placeholder="헬스장을 검색해보세요." autoFocus />
          </S.SearchInput>
          <S.NotGym>
            <span>등록된 헬스장이 없습니다.</span>
          </S.NotGym>
        </S.GymRegister>
      </S.EditForm>
    </S.Wrapper>
  );
};

export default Content;

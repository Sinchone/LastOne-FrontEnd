import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profilelarge.svg';
import ArrowIcon from '@assets/icon/small-arrow.svg';
import Map from '../Map';
import { ProfileType } from '@typing/user';

interface Props {
  user: ProfileType;
}

const Content = ({ user }: Props) => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <ProfileIcon />
        <S.ProfileInfo>
          <S.NameWrapper>
            <span className="name">{user.nickname}</span>
            <S.Gender>남성</S.Gender>
          </S.NameWrapper>
          <span className="introduce">다이어트를 목표로 운동을 꾸준히 하고 있습니다. 열심히 화이팅!</span>
        </S.ProfileInfo>
      </S.ProfileWrapper>
      <S.FitnessContents>
        <S.FitnessContent>
          <span>데드리프트</span>
          <span className="description">000 kg</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>스쿼트</span>
          <span className="description">000 kg</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>벤치</span>
          <span className="description">000 kg</span>
        </S.FitnessContent>
      </S.FitnessContents>
      <S.FitnessContents>
        <S.FitnessContent>
          <span>운동 목표</span>
          <span className="description">다이어트</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>운동 요일</span>
          <span className="description">화, 수 , 목</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>주 운동 시간</span>
          <span className="description">14:00</span>
        </S.FitnessContent>
      </S.FitnessContents>
      <S.GymWrapper>
        <span className="title">헬스장 위치</span>
        <S.NotGym>
          <span>등록된 헬스장이 없습니다.</span>
        </S.NotGym>
      </S.GymWrapper>
      <S.FitnesPartner>
        <span className="title">운동 파트너 목록</span>
        <span className="more">
          전체보기 <ArrowIcon />
        </span>
      </S.FitnesPartner>
    </S.Wrapper>
  );
};

export default Content;

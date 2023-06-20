import React, { useState } from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profilelarge.svg';
import ArrowIcon from '@assets/icon/small-arrow.svg';
import MyMap from '../MyMap';
import { ProfileType, GymInfoType, FitnessType } from '@typing/user';
import { createImageUrl } from '@utils/createImageUrl';

interface Props {
  user: ProfileType;
  sbd: FitnessType;
  gym: GymInfoType[];
}

const Content = ({ user, sbd, gym }: Props) => {
  const [gymName, setGymName] = useState(gym.length !== 0 ? gym[0].name : '');

  const handleSelectGym = (name: string) => {
    setGymName(name);
  };

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        {user.profileUrl ? (
          <S.ImgWrapper>
            <img src={createImageUrl(user.profileUrl as string)} />
          </S.ImgWrapper>
        ) : (
          <ProfileIcon />
        )}

        <S.ProfileInfo>
          <S.NameWrapper>
            <span className="name">{user.nickname}</span>
            <S.Gender>{user.gender}</S.Gender>
          </S.NameWrapper>
        </S.ProfileInfo>
      </S.ProfileWrapper>
      <S.FitnessContents>
        <S.FitnessContent>
          <span>데드리프트</span>
          <span className="description">{sbd.deadLift ? `${sbd.deadLift}kg` : '-'}</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>스쿼트</span>
          <span className="description">{sbd.squat ? `${sbd.squat}kg` : '-'}</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>벤치</span>
          <span className="description">{sbd.benchPress ? `${sbd.benchPress}kg` : '-'}</span>
        </S.FitnessContent>
      </S.FitnessContents>
      <S.FitnessContents>
        <S.FitnessContent>
          <span>운동 목표</span>
          <span className="description">{user.workoutPurpose ? `${user.workoutPurpose}` : '-'}</span>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>운동 요일</span>
          <S.WorkWrapper>
            {user.workoutDay.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </S.WorkWrapper>
        </S.FitnessContent>
        <S.Contour />
        <S.FitnessContent>
          <span>주 운동 시간</span>
          <span className="description">{user.workoutTime}</span>
        </S.FitnessContent>
      </S.FitnessContents>
      <S.GymWrapper>
        <span className="title">헬스장 위치</span>
        {gym.length === 0 ? (
          <S.NotGym>
            <span>등록된 헬스장이 없습니다.</span>
          </S.NotGym>
        ) : (
          <MyMap searchPlace={gymName} />
        )}
        <S.MyGymWrapper>
          {gym.length !== 0 &&
            gym.map((gym) => (
              <S.MyGym key={gym.latitude} onClick={() => handleSelectGym(gym.name)} select={gym.name === gymName}>
                {gym.name}
              </S.MyGym>
            ))}
        </S.MyGymWrapper>
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

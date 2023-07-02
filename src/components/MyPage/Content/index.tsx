import React, { useEffect, useState } from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profilelarge.svg';
import ArrowIcon from '@assets/icon/small-arrow.svg';
import { ProfileType, GymInfoType, FitnessType } from '@typing/user';
import { createImageUrl } from '@utils/createImageUrl';
import { Map, Modal } from '@components/Common';
import { useRouter } from 'next/router';

interface Props {
  other?: boolean;
  user: ProfileType;
  sbd: FitnessType;
  gym: GymInfoType[];
}

const Content = ({ other, user, sbd, gym }: Props) => {
  const router = useRouter();
  const [isEditRequiredModal, setIsEditRequiredModal] = useState(!user.isEdited);
  const [gymName, setGymName] = useState(gym.length !== 0 ? gym[0].name : '');

  const handleSelectGym = (name: string) => {
    setGymName(name);
  };

  const fitnesPartner = (
    <S.FitnesPartner>
      <span className="title">운동 파트너 목록</span>
      <span className="more">
        전체보기 <ArrowIcon />
      </span>
    </S.FitnesPartner>
  );

  const chattingButton = <S.ChattingButton onClick={() => console.log(`채팅하러 가기`)}>채팅하기</S.ChattingButton>;

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
            <S.Gender>{user.gender || '미정'}</S.Gender>
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
              <span className="description" key={day}>
                {day}
              </span>
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
          <Map searchPlace={gymName} />
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
      {other ? chattingButton : fitnesPartner}
      {!other && isEditRequiredModal && (
        <Modal
          hasArrow
          isOpen={isEditRequiredModal}
          handleClose={() => setIsEditRequiredModal(false)}
          handleConfirm={() => router.replace('/mypage/edit')}
          handleCancel={() => router.replace('/')}
          text={{
            label: '서비스 이용을 위해 정보를 입력해주세요!',
            confirm: '정보 입력하기',
            cancel: '다음에 하기',
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default Content;

import React from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/mypage.svg';
import { FitnessType, GymInfoType, ProfileType } from '@typing/user';
import { useProfileForm } from '@hooks/MyPage';

interface Props {
  profile: {
    gyms: GymInfoType[];
    member: ProfileType;
    sbd: FitnessType;
  };
}

const Content = ({ profile }: Props) => {
  const {
    profileState,
    fitness,
    time,
    days,
    handleProfileInputChange,
    handleChangeFitnessInput,
    handleSelectWorkOutDay,
    handleChangeTimeInput,
    handleSelectGender,
  } = useProfileForm(profile);

  console.log(days);

  return (
    <S.Wrapper>
      <S.ProfileImgWrapper>
        <ProfileIcon />
        <span>사진 편집</span>
      </S.ProfileImgWrapper>
      <S.EditForm>
        <S.Label>닉네임</S.Label>
        <S.Input
          placeholder="닉네임을 입력해주세요."
          value={profileState.nickname}
          name="nickname"
          onChange={handleProfileInputChange}
        />
        <S.Label>성별</S.Label>
        <S.GenderWrapper>
          <S.Gender select={profileState.gender === '남성'} onClick={handleSelectGender('남성')}>
            남성
          </S.Gender>
          <S.Gender select={profileState.gender === '여성'} onClick={handleSelectGender('여성')}>
            여성
          </S.Gender>
        </S.GenderWrapper>
        <S.Label>한줄 소개</S.Label>
        <S.Input
          placeholder="한줄 소개를 간단하게 입력해주세요."
          value={profileState.workoutPurpose}
          name="workoutPurpose"
          onChange={handleProfileInputChange}
        />
        <S.FitnessInfoWrapper>
          <S.FitnessInfo>
            <S.Label>데드리프트</S.Label>
            <S.SmallInput placeholder="입력." value={fitness.deadLift} onChange={handleChangeFitnessInput} />
          </S.FitnessInfo>
          <S.FitnessInfo>
            <S.Label>스쿼트</S.Label>
            <S.SmallInput placeholder="입력." value={fitness.squat} onChange={handleChangeFitnessInput} />
          </S.FitnessInfo>
          <S.FitnessInfo>
            <S.Label>벤치프레스</S.Label>
            <S.SmallInput placeholder="입력." value={fitness.benchPress} onChange={handleChangeFitnessInput} />
          </S.FitnessInfo>
        </S.FitnessInfoWrapper>
        <S.GymRegister>
          <S.Label>등록 헬스장</S.Label>
          <S.SearchInput>
            <input placeholder="헬스장을 검색해보세요." />
          </S.SearchInput>
          <S.NotGym>
            <span>등록된 헬스장이 없습니다.</span>
          </S.NotGym>
        </S.GymRegister>
        <S.WorkDay>
          <S.Label>운동 요일</S.Label>
          <S.SelectWorkContainer>
            <S.SelectWork onClick={handleSelectWorkOutDay('월')} select={days['월']}>
              월
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('화')} select={days['화']}>
              화
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('수')} select={days['수']}>
              수
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('목')} select={days['목']}>
              목
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('금')} select={days['금']}>
              금
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('토')} select={days['토']}>
              토
            </S.SelectWork>
            <S.SelectWork onClick={handleSelectWorkOutDay('일')} select={days['일']}>
              일
            </S.SelectWork>
          </S.SelectWorkContainer>
        </S.WorkDay>
        <S.WorkTime>
          <S.Label>운동 시작 시간</S.Label>
          <S.InputContainer>
            <S.TimeInput placeholder="00" onChange={handleChangeTimeInput} value={time.hour} name="hour" />
            <S.Divide>
              <span>:</span>
            </S.Divide>
            <S.TimeInput placeholder="00" onChange={handleChangeTimeInput} value={time.minute} name="minute" />
          </S.InputContainer>
        </S.WorkTime>
      </S.EditForm>
    </S.Wrapper>
  );
};

export default Content;

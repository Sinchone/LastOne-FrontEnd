import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import ProfileIcon from '@assets/icon/mypage.svg';
import CloseIcon from '@assets/icon/close.svg';
import { FitnessType, GymInfoType, ProfileType } from '@typing/user';
import { useProfileForm } from '@hooks/MyPage';
import SearchGym from '../SearchGym';
import { editProfile } from '@apis/user';
import { createImageUrl } from '@utils/createImageUrl';
import SearchIcon from '@assets/icon/search.svg';
import { Map } from '@components/Common';

interface Props {
  profile: {
    gyms: GymInfoType[];
    member: ProfileType;
    sbd: FitnessType;
  };
}

const Content = ({ profile }: Props) => {
  const router = useRouter();
  const [isMapShow, setIsMapShow] = useState(false);
  const [image, setImage] = useState<any>('');
  const {
    profileState,
    fitness,
    time,
    days,
    gymState,
    handleProfileInputChange,
    handleChangeFitnessInput,
    handleSelectWorkOutDay,
    handleChangeTimeInput,
    handleSelectGender,
    handleRemoveGym,
    setProfileImage,
    setChangeGymState,
  } = useProfileForm(profile);
  const [gymName, setGymName] = useState(gymState.length !== 0 ? gymState[0].name : '');

  console.log(gymState);
  console.log(fitness);
  console.log(profileState);
  console.log(days);
  console.log(time);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as any;
    const url = URL.createObjectURL(files[0]);

    [].forEach.call(e.target.files, (f) => {
      setImage(f);
    });

    setProfileImage(url);
  };

  const handleCloseSearch = () => {
    setIsMapShow(false);
  };

  const handleSubmitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const myPageData = {
      member: {
        nickname: profileState.nickname,
        gender: profileState.gender,
        workoutPurpose: profileState.workoutPurpose,
        workoutTime: profileState.workoutTime,
        workoutDay: profileState.workoutDay,
      },
      gyms: gymState,
      sbd: fitness,
    };

    const formData = new FormData();

    formData.append(
      'myPage',
      new Blob([JSON.stringify(myPageData)], {
        type: 'application/json',
      })
    );
    if (image) {
      formData.append('profileImg', image);
    }

    editProfile(formData).then((res) => {
      console.log(res);
      router.push('/mypage');
    });
  };

  const handleSelectGym = (name: string) => {
    setGymName(name);
  };
  console.log(profileState.profileUrl?.slice(5));
  return (
    <>
      {!isMapShow ? (
        <S.Wrapper>
          <S.ProfileImgWrapper encType="multipart/form-data" method="put">
            <label>
              {profileState.profileUrl === null ? (
                <ProfileIcon />
              ) : (
                <S.ImgWrapper>
                  {image != '' ? (
                    <img src={profileState.profileUrl} />
                  ) : (
                    <img src={createImageUrl(profileState.profileUrl as string)} />
                  )}
                </S.ImgWrapper>
              )}
              <span>사진 편집</span>
              <input type="file" name="image" accept=".gif, .jpg, .png" onChange={handleImageChange} />
            </label>
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
                <S.SmallInput
                  placeholder="입력."
                  value={fitness.deadLift}
                  onChange={handleChangeFitnessInput}
                  name="deadLift"
                />
              </S.FitnessInfo>
              <S.FitnessInfo>
                <S.Label>스쿼트</S.Label>
                <S.SmallInput
                  placeholder="입력."
                  value={fitness.squat}
                  onChange={handleChangeFitnessInput}
                  name="squat"
                />
              </S.FitnessInfo>
              <S.FitnessInfo>
                <S.Label>벤치프레스</S.Label>
                <S.SmallInput
                  placeholder="입력."
                  value={fitness.benchPress}
                  onChange={handleChangeFitnessInput}
                  name="benchPress"
                />
              </S.FitnessInfo>
            </S.FitnessInfoWrapper>
            <S.GymRegister>
              <S.Label>등록 헬스장</S.Label>
              <S.SearchInput onClick={() => setIsMapShow(true)}>
                <SearchIcon />
                <input placeholder="헬스장을 검색해보세요." />
              </S.SearchInput>
              {gymState.length === 0 ? (
                <S.NotGym>
                  <span>등록된 헬스장이 없습니다.</span>
                </S.NotGym>
              ) : (
                <Map searchPlace={gymName} />
              )}
              <S.MyGymWrapper>
                {gymState.length !== 0 &&
                  gymState.map((gym) => (
                    <S.MyGym key={gym.latitude} onClick={() => handleSelectGym(gym.name)} select={gym.name === gymName}>
                      {gym.name}
                      <CloseIcon onClick={() => handleRemoveGym(gym.latitude)} />
                    </S.MyGym>
                  ))}
              </S.MyGymWrapper>
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
            <S.ButtonGroup>
              <S.CancelButton>취소</S.CancelButton>
              <S.Button onClick={handleSubmitForm}>등록</S.Button>
            </S.ButtonGroup>
          </S.EditForm>
        </S.Wrapper>
      ) : (
        <SearchGym setChangeGymState={setChangeGymState} handleCloseSearch={handleCloseSearch} />
      )}
    </>
  );
};

export default Content;

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';

import { FitnessType, GymInfoType, ProfileType } from '@typing/user';
import { useProfileForm } from '@hooks/MyPage';
import SearchGym from '../SearchGym';
import { editProfile, nicknameCheck } from '@apis/user';
import { createImageUrl } from '@utils/createImageUrl';
import SearchIcon from '@assets/icon/search.svg';
import { Map, Modal } from '@components/Common';

import ProfileIcon from '@assets/icon/mypage.svg';
import CloseIcon from '@assets/icon/close.svg';
import PlusIcon from '@assets/icon/plus.svg';
import Usable from '@assets/icon/usable.svg';
import Unusable from '@assets/icon/unusable.svg';

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

  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [isUsableNickname, setIsUsableNickname] = useState(false);
  const [warningText, setWarningText] = useState('이미 사용중인 닉네임입니다.');

  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [isNicknameCheckModal, setIsNicknameCheckModal] = useState(false);

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

  const handleCheckNickname = () => {
    const originalNickname = profile.member.nickname;
    const changedNickname = profileState.nickname || '';

    if (originalNickname !== changedNickname) {
      if (changedNickname.length >= 2) {
        nicknameCheck(changedNickname).then((response) => {
          const isDuplicated = response.data.isDuplicated;

          setIsNicknameChecked(true);
          setIsUsableNickname(isDuplicated ? false : true);
          setWarningText('이미 사용중인 닉네임입니다.');
        });
      } else {
        setIsNicknameChecked(true);
        setIsUsableNickname(false);
        setWarningText('닉네임은 2~15자만 가능합니다.');
      }
    } else {
      setIsNicknameChecked(false);
      setIsUsableNickname(true);
    }
  };

  const handleCloseSearch = () => {
    setIsMapShow(false);
  };

  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (profileState.nickname && profileState.gender && gymState.length) {
      if (isUsableNickname) setIsSubmitModal(true);
      else setIsNicknameCheckModal(true);
    } else setIsWarningModal(true);
  };

  const handleSubmitForm = async () => {
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

    if (isUsableNickname) {
      editProfile(formData)
        .then((res) => {
          console.log(res);
          setIsSubmitSuccess(true);
        })
        .then(() => {
          setTimeout(() => {
            router.push('/mypage');
          }, 2000);
        });
    } else {
      setIsNicknameCheckModal(true);
    }
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
            <S.EditItem>
              <S.Label>
                닉네임<span>(필수)</span>
              </S.Label>
              <S.NicknameWrapper>
                <span>
                  <S.NicknameInputWrapper>
                    <S.Input
                      placeholder="닉네임을 입력해주세요."
                      value={profileState.nickname}
                      name="nickname"
                      onChange={handleProfileInputChange}
                      maxLength={15}
                    />
                    <span>{profileState.nickname?.length}/15</span>
                  </S.NicknameInputWrapper>
                  <S.NicknameCheckButton onClick={handleCheckNickname}>중복 확인</S.NicknameCheckButton>
                </span>

                {isNicknameChecked && (
                  <S.NicknameCheckResult isUsable={isUsableNickname}>
                    {isUsableNickname ? (
                      <>
                        <Usable />
                        사용 가능한 닉네임입니다.
                      </>
                    ) : (
                      <>
                        <Unusable />
                        {warningText}
                      </>
                    )}
                  </S.NicknameCheckResult>
                )}
              </S.NicknameWrapper>
            </S.EditItem>

            <S.EditItem>
              <S.Label>
                성별<span>(필수)</span>
              </S.Label>
              <S.GenderWrapper>
                <S.Gender select={profileState.gender === '남성'} onClick={handleSelectGender('남성')}>
                  남성
                </S.Gender>
                <S.Gender select={profileState.gender === '여성'} onClick={handleSelectGender('여성')}>
                  여성
                </S.Gender>
              </S.GenderWrapper>
            </S.EditItem>

            <S.EditItem>
              <S.Label>운동 목표</S.Label>
              <S.Input
                placeholder="운동 목표를 간단하게 입력해주세요."
                value={profileState.workoutPurpose}
                name="workoutPurpose"
                onChange={handleProfileInputChange}
              />
            </S.EditItem>

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
              <S.Label>
                등록 헬스장<span>(필수)</span>
              </S.Label>
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
                {gymState.length === 1 && (
                  <S.MyGymPlus>
                    <PlusIcon onClick={() => setIsMapShow(true)} />
                  </S.MyGymPlus>
                )}
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
              <S.CancelButton onClick={() => router.push('/mypage')}>취소</S.CancelButton>
              <S.Button onClick={handleClickSubmit}>등록</S.Button>
            </S.ButtonGroup>
          </S.EditForm>
          {isSubmitModal && (
            <Modal
              isOpen={isSubmitModal}
              handleClose={() => setIsSubmitModal(false)}
              handleConfirm={handleSubmitForm}
              isSuccess={isSubmitSuccess}
              setIsSuccess={setIsSubmitSuccess}
              text={{
                label: '수정된 정보를 저장할까요?',
                confirm: '저장하기',
                cancel: '계속 수정하기',
                success: '성공적으로\n저장 되었습니다!',
              }}
            />
          )}
          {isWarningModal && (
            <Modal
              isOpen={isWarningModal}
              handleClose={() => setIsWarningModal(false)}
              handleConfirm={() => setIsWarningModal(false)}
              handleCancel={() => router.push('/mypage')}
              text={{
                label: '필수 정보를 입력해주세요!',
                confirm: '입력하러가기',
                cancel: '다음에 수정하기',
              }}
            />
          )}

          {isNicknameCheckModal && (
            <Modal
              isOpen={isNicknameCheckModal}
              handleClose={() => setIsNicknameCheckModal(false)}
              handleConfirm={() => setIsNicknameCheckModal(false)}
              handleCancel={() => router.replace('/mypage')}
              text={{
                label: '닉네임 중복 확인이 필요합니다!',
                confirm: '계속 수정하기',
                cancel: '수정 취소하기',
              }}
            />
          )}
        </S.Wrapper>
      ) : (
        <SearchGym setChangeGymState={setChangeGymState} handleCloseSearch={handleCloseSearch} />
      )}
    </>
  );
};

export default Content;

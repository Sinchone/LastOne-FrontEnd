import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import SearchIcon from '@assets/icon/search.svg';
import SearchGym from '../SearchGym';
import { useBottomSheet } from '@hooks/common';
import { useRecoilState } from 'recoil';
import { isMapShowState } from '@recoil/postWrite';
import { selectedDateState, selectedTimeState } from '@recoil/bottomsheet/calendarTime';
import moment from 'moment';
import { Post, PostDetailType } from '@typing/post';
import { exercisePartArray, genderArray } from '@constants/post';
import { createPost, editPost } from '@apis/post';
import { checkAllKeysHaveValues } from '@utils/checkAllKeysHaveValues';
import { Map, Modal } from '@components/Common';
import Images from '../Image';
import { useRouter } from 'next/router';
import NoImage from '../Image/None';
import 'moment/locale/ko';
import { createImageUrl } from '@utils/createImageUrl';
import Image from 'next/image';
import { useGetUserInfo } from '@hooks/common/queries';

interface Props {
  isEdit?: boolean;
  originalPost?: PostDetailType;
}

export interface ImageType {
  files: (File | string)[];
  urls: string[];
}

const Content = ({ isEdit, originalPost }: Props) => {
  const initialData: Post = {
    title: originalPost?.title || '',
    description: originalPost?.description || '',
    workoutPart: originalPost?.workoutPart || '',
    preferGender: originalPost?.preferGender || '',
    gym: originalPost?.gym || {
      name: '',
      location: '',
      latitude: '',
      longitude: '',
    },
    startedAt: {
      date: '',
      meridiem: '',
      time: '',
    },
  };
  const [data, setData] = useState<Post>(initialData);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState);
  const [isMapShow, setIsMapShow] = useRecoilState(isMapShowState);
  const [img, setImg] = useState<ImageType>({
    files: [],
    urls: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { showBottomSheet } = useBottomSheet();
  const router = useRouter();
  const { currentUserIsEdited } = useGetUserInfo();

  useEffect(() => {
    if (inputRef.current) {
      if (inputRef.current.value === '') {
        inputRef.current.focus();
      }
    }
  }, [isMapShow, inputRef]);

  useEffect(() => {
    if (originalPost) {
      const startedAtDate = new Date(originalPost.startedAt);
      setSelectedDate(startedAtDate);
      setSelectedTime({
        meridiem: moment(startedAtDate).format('a') as '오전' | '오후',
        time: moment(startedAtDate).format('h:mm'),
      });

      const originalImages = originalPost.imgUrls.map((imgUrl) => createImageUrl(imgUrl as string));
      setImg((prev) => {
        return { ...prev, urls: originalImages };
      });
    }
  }, [originalPost, setSelectedDate, setSelectedTime]);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, title: e.target.value });
  };

  const descriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, description: e.target.value });
  };

  const setChangeSearchPlace = (place: any) => {
    setData({
      ...data,
      gym: {
        ...data.gym,
        ...place,
      },
    });
  };

  const handleCloseSearch = () => {
    setIsMapShow(false);
  };

  const textareaResizeHandler = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    descriptionHandler(e);
    textareaResizeHandler();
  };

  const handleSubmitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const postData = {
      title: data.title,
      description: data.description,
      workoutPart: data.workoutPart,
      preferGender: data.preferGender,
      gym: data.gym,
      startedAt: {
        date: moment(selectedDate).format('yyyy.MM.DD'),
        meridiem: selectedTime.meridiem,
        time: selectedTime.time,
      },
    };

    if (!checkAllKeysHaveValues(postData)) {
      alert('항목을 모두 작성해주세요.');
      return;
    }

    const formData = new FormData();

    formData.append(
      'recruitment',
      new Blob([JSON.stringify(postData)], {
        type: 'application/json',
      })
    );

    if (img.files) {
      console.log('imgFiles', img.files);
      for (let i = 0; i < img.files.length; i++) {
        if (img.files[i]) {
          formData.append('imgFiles', img.files[i]);
        }
      }
    }

    for (const pair of formData.entries()) {
      console.log('test', pair[0] + ', ' + pair[1]);
    }

    if (!isEdit) {
      createPost(formData).then((res) => {
        console.log(res);
      });

      await router.push('/');
      router.reload();
    }

    const postId = originalPost?.recruitmentId;

    if (!postId) return;
    editPost(postId, formData).then(() => {
      setIsEditSuccess(true);
    });
  };

  const uploadImages = img.urls.join('') ? <Images setImg={setImg} img={img} /> : <NoImage setImg={setImg} />;
  const viewImages = img.urls.join('') ? (
    <S.ImageWrapper>
      {img.urls.map((imgUrl) => (
        <div key={imgUrl}>
          <Image src={imgUrl} fill alt="image" style={{ objectFit: 'contain' }} />
        </div>
      ))}
    </S.ImageWrapper>
  ) : (
    <></>
  );

  console.log('imgFiles:', img.files);
  console.log('imgUrls', img.urls);

  return (
    <>
      {!isMapShow ? (
        <S.Wrapper>
          <S.TitleInputWrapper>
            <input
              ref={inputRef}
              type="text"
              placeholder="제목"
              value={data.title}
              onChange={titleHandler}
              maxLength={30}
            />
            <span>{data.title.length}/30</span>
          </S.TitleInputWrapper>

          {/* 운동 날짜와 운동 시간 BottomSheet 사용 */}
          <S.SelectWrapper>
            <S.SelectArea onClick={() => showBottomSheet('CalendarTime', 'calendar')}>
              <div>
                <CalendarIcon />
                <S.Subject>{selectedDate ? moment(selectedDate).format('MM/DD') : '운동 날짜'}</S.Subject>
              </div>
              <BottomArrowIcon />
            </S.SelectArea>
            <S.SelectArea onClick={() => showBottomSheet('CalendarTime', 'time')}>
              <div>
                <ClockIcon />
                <S.Subject>
                  {Object.values(selectedTime).every((value) => value)
                    ? `${selectedTime.meridiem} ${selectedTime.time}`
                    : '운동 시간'}
                </S.Subject>
              </div>
              <BottomArrowIcon />
            </S.SelectArea>
          </S.SelectWrapper>

          {/* 선호 성별 선택 버튼 */}
          <S.GenderArea>
            <S.Subject>성별</S.Subject>
            <S.GenderWrapper>
              {genderArray.map((gender, idx) => (
                <S.Gender
                  key={idx}
                  onClick={() => setData({ ...data, preferGender: gender })}
                  selected={data.preferGender}
                  gender={gender}
                >
                  {gender}
                </S.Gender>
              ))}
            </S.GenderWrapper>
          </S.GenderArea>

          {/* 운동 부위 선택 버튼*/}
          <S.ExercisePartArea>
            <S.Subject>운동 부위</S.Subject>
            <S.ExercisePartWrapper>
              {exercisePartArray.map((part, idx) => (
                <S.ExercisePart
                  key={idx}
                  onClick={() => setData({ ...data, workoutPart: part })}
                  selected={data.workoutPart}
                  part={part}
                >
                  {part}
                </S.ExercisePart>
              ))}
            </S.ExercisePartWrapper>
          </S.ExercisePartArea>

          {/* 헬스장 위치 검색 */}
          <S.ExercisePlaceSearchArea>
            <S.Subject>헬스장 위치</S.Subject>
            <S.ExercisePlaceSearchInputWrapper onClick={() => setIsMapShow(true)}>
              <SearchIcon />
              <input type="text" placeholder="헬스장 위치를 검색해보세요." />
            </S.ExercisePlaceSearchInputWrapper>
            {/* 맵 */}
            <Map searchPlace={data.gym.name} />
          </S.ExercisePlaceSearchArea>

          {/* 상세설명 */}
          <S.DescriptionArea>
            <S.Subject>상세설명</S.Subject>
            {isEdit ? viewImages : uploadImages}

            <S.DescriptionTextAreaWrapper>
              <div>{data.description.length}/100</div>
              <S.TextAreaWrapper>
                <textarea
                  ref={textareaRef}
                  name="description"
                  value={data.description}
                  onChange={textareaOnChangeHandler}
                  maxLength={100}
                  rows={1}
                  placeholder="내용을 입력해주세요."
                ></textarea>
              </S.TextAreaWrapper>
            </S.DescriptionTextAreaWrapper>
          </S.DescriptionArea>

          {/* 업로드 버튼 */}
          <S.UploadBtn onClick={handleSubmitForm}>업로드</S.UploadBtn>
          {isEditSuccess && (
            <Modal
              isOpen={isEditSuccess}
              handleClose={() => {
                setIsEditSuccess(false);
                router.replace(`/post/${originalPost?.recruitmentId}`);
              }}
              text={{ success: '성공적으로\n수정 되었습니다!' }}
            />
          )}
        </S.Wrapper>
      ) : (
        <SearchGym setChangeSearchPlace={setChangeSearchPlace} handleCloseSearch={handleCloseSearch} />
      )}
      {!currentUserIsEdited && (
        <Modal
          isOpen={!currentUserIsEdited}
          handleClose={() => router.back()}
          handleConfirm={() => router.push('/mypage')}
          handleCancel={() => router.push('/')}
          hasArrow
          text={{
            label: '회원 정보를 입력해야 글을 작성할 수 있어요.',
            confirm: '정보 입력하기',
            cancel: '홈으로 가기',
          }}
        />
      )}
    </>
  );
};

export default Content;

import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import SearchIcon from '@assets/icon/search.svg';
import AddImgIcon from '@assets/icon/addImg.svg';
import Map from '../Map';
import SearchGym from '../SearchGym';
import { useBottomSheet } from '@hooks/common';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMapShowState } from '@recoil/postWrite';
import { selectedDateState, selectedTimeState } from '@recoil/bottomsheet/calendarTime';
import moment from 'moment';
import { Post } from '@typing/post';
import { exercisePartArray } from '@constants/post';

const Content = () => {
  const initialData: Post = {
    title: '',
    description: '',
    workoutPart: '',
    preferGender: '',
    gym: {
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
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedTime = useRecoilValue(selectedTimeState);
  const [isMapShow, setIsMapShow] = useRecoilState(isMapShowState);
  const inputRef = useRef<HTMLInputElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { showBottomSheet } = useBottomSheet();

  useEffect(() => {
    if (inputRef.current) {
      if (inputRef.current.value === '') {
        inputRef.current.focus();
      }
    }
  }, [isMapShow, inputRef]);

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

  const handleUpload = () => {
    setData({
      ...data,
      startedAt: {
        ...data.startedAt,
        date: moment(selectedDate).format('yyyy.MM.DD'),
        meridiem: selectedTime.meridiem,
        time: selectedTime.time,
      },
    });
    console.log('data', data);
  };

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
          <S.SelectWrapper onClick={() => showBottomSheet('CalendarTime')}>
            <S.SelectArea>
              <div>
                <CalendarIcon />
                <S.Subject>{selectedDate ? moment(selectedDate).format('MM/DD') : '운동 날짜'}</S.Subject>
              </div>
              <BottomArrowIcon />
            </S.SelectArea>
            <S.SelectArea>
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
            <S.DescriptionImageWrapper>
              <AddImgIcon />
              {/* 사진 없으면 아이콘 + 사진추가 버튼? */}
              {/* 사진 있으면 사진 3장까지? */}
              <div></div>
              <div>
                <S.DescriptionImage></S.DescriptionImage>
                <S.DescriptionImage></S.DescriptionImage>
                <S.DescriptionImage></S.DescriptionImage>
              </div>
            </S.DescriptionImageWrapper>
            <S.DescriptionTextAreaWrapper>
              <span>{data.description.length}/100</span>
              <textarea
                ref={textareaRef}
                name="description"
                value={data.description}
                onChange={textareaOnChangeHandler}
                maxLength={100}
                rows={1}
                placeholder="내용을 입력해주세요."
              ></textarea>
            </S.DescriptionTextAreaWrapper>
          </S.DescriptionArea>

          {/* 업로드 버튼 */}
          <S.UploadBtn onClick={handleUpload}>업로드</S.UploadBtn>
        </S.Wrapper>
      ) : (
        <SearchGym setChangeSearchPlace={setChangeSearchPlace} handleCloseSearch={handleCloseSearch} />
      )}
    </>
  );
};

export default Content;

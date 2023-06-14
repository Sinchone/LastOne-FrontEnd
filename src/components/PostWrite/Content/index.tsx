import { useRef, useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import SearchIcon from '@assets/icon/search.svg';
import AddImgIcon from '@assets/icon/addImg.svg';
import Map from '../Map';
import SearchGym from '../SearchGym';
import { useBottomSheet } from '@hooks/common';
import { GymInfoType } from '@typing/user';
import { useRecoilState } from 'recoil';
import { isMapShowState } from '@recoil/postWrite';

const Content = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercisePart, setSelectedExercisePart] = useState('');
  const [isMapShow, setIsMapShow] = useRecoilState(isMapShowState);
  const [searchPlace, setSearchPlace] = useState<GymInfoType>({
    name: '',
    location: '',
    latitude: '',
    longitude: '',
  });
  const textarea = useRef<HTMLTextAreaElement>(null);
  const { showBottomSheet } = useBottomSheet();

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const exercisePartArray = ['전신', '가슴', '등', '어깨', '하체', '코어'];

  const setChangeSearchPlace = (place: any) => {
    setSearchPlace(place);
  };

  const handleCloseSearch = () => {
    setIsMapShow(false);
  };

  const textareaResizeHandler = () => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    descriptionHandler(e);
    textareaResizeHandler();
  };

  return (
    <>
      {!isMapShow ? (
        <S.Wrapper>
          <S.TitleInputWrapper>
            <input type="text" placeholder="제목" value={title} onChange={titleHandler} maxLength={30} />
            <span>{title.length}/30</span>
          </S.TitleInputWrapper>

          {/* 운동 날짜와 운동 시간 BottomSheet 사용 */}
          <S.SelectWrapper onClick={() => showBottomSheet('CalendarTime')}>
            <S.SelectArea>
              <div>
                <CalendarIcon />
                <S.Subject>운동 날짜</S.Subject>
              </div>
              <BottomArrowIcon />
            </S.SelectArea>
            <S.SelectArea>
              <div>
                <ClockIcon />
                <S.Subject>운동 시간</S.Subject>
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
                  onClick={() => setSelectedExercisePart(part)}
                  selected={selectedExercisePart}
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
            <Map searchPlace={searchPlace.name} />
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
              <span>{description.length}/100</span>
              <textarea
                ref={textarea}
                name="description"
                value={description}
                onChange={textareaOnChangeHandler}
                maxLength={100}
                rows={1}
                placeholder="내용을 입력해주세요."
              ></textarea>
            </S.DescriptionTextAreaWrapper>
          </S.DescriptionArea>

          {/* 업로드 버튼 */}
          <S.UploadBtn>업로드</S.UploadBtn>
        </S.Wrapper>
      ) : (
        <SearchGym setChangeSearchPlace={setChangeSearchPlace} handleCloseSearch={handleCloseSearch} />
      )}
    </>
  );
};

export default Content;

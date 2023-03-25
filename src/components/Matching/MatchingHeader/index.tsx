import React from 'react';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import BottomArrowSmallIcon from '@assets/icon/bottom-arrow-small.svg';
import SearchIcon from '@assets/icon/search.svg';
import * as S from './style';

const MatchingHeader = () => {
  return (
    <S.Wrapper>
      <S.LocationAndSearch>
        <span className="location">전체</span>
        <BottomArrowIcon />
        <S.CheckboxContainer>
          <S.Checkbox />
          <span className="checkbox_title">헬스장</span>
        </S.CheckboxContainer>
        <S.CheckboxContainer>
          <S.Checkbox />
          <span className="checkbox_title">제목</span>
        </S.CheckboxContainer>
      </S.LocationAndSearch>
      <S.SearchInput>
        <SearchIcon />
        <input placeholder="제목과 헬스장을 검색해보세요." />
      </S.SearchInput>
      <S.FilterAndCheckbox>
        <S.FilterContainer>
          <S.Filter>
            <span>최신순</span>
          </S.Filter>
          <S.Filter>
            <span>운동부위</span> <BottomArrowSmallIcon />
          </S.Filter>
          <S.Filter>
            <span>성별</span> <BottomArrowSmallIcon />
          </S.Filter>
          <S.Filter>
            <span>날짜 설정</span> <BottomArrowSmallIcon />
          </S.Filter>
        </S.FilterContainer>
        <S.CheckboxContainer>
          <S.Checkbox />
          <span className="checkbox_title">모집중만 보기</span>
        </S.CheckboxContainer>
      </S.FilterAndCheckbox>
    </S.Wrapper>
  );
};

export default MatchingHeader;

import React from 'react';
import BottomArrowSmallIcon from '@assets/icon/bottom-arrow-small.svg';
import SearchIcon from '@assets/icon/search.svg';
import { Checkbox } from '@components/Common';
import { ExerciseArea, Gender, FitnessClub } from '@components/Matching/MatchingFilter';
import * as S from './style';
import { useBottomSheet } from '@hooks/common';
import { SEARCH_PAGE } from '@constants/route';
import Link from 'next/link';

const MatchingHeader = () => {
  return (
    <S.Wrapper>
      <FitnessClub />
      <Link href={SEARCH_PAGE}>
        <S.SearchInput>
          <SearchIcon />
          <input placeholder="제목과 헬스장을 검색해보세요." />
        </S.SearchInput>
      </Link>
      <S.FilterAndCheckbox>
        <S.FilterContainer>
          <ExerciseArea />
          <Gender />
          <S.Filter>
            <span>날짜 설정</span> <BottomArrowSmallIcon />
          </S.Filter>
        </S.FilterContainer>
        <S.CheckboxContainer>
          <Checkbox />
          <span className="checkbox_title">모집중만 보기</span>
        </S.CheckboxContainer>
      </S.FilterAndCheckbox>
    </S.Wrapper>
  );
};

export default MatchingHeader;

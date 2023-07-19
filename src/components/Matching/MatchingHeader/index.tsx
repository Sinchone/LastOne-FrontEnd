import React from 'react';
import BottomArrowSmallIcon from '@assets/icon/bottom-arrow-small.svg';
import SearchIcon from '@assets/icon/search.svg';
import { WorkoutPart, PreferGender, GymName, IsRecruiting } from '@components/Matching/MatchingFilter';
import * as S from './style';
import { SEARCH_PAGE } from '@constants/route';
import Link from 'next/link';

const MatchingHeader = () => {
  return (
    <S.Wrapper>
      <GymName />
      <Link href={SEARCH_PAGE}>
        <S.SearchInput>
          <SearchIcon />
          <input placeholder="제목과 헬스장을 검색해보세요." />
        </S.SearchInput>
      </Link>
      <S.FilterAndCheckbox>
        <S.FilterContainer>
          <WorkoutPart />
          <PreferGender />
          <S.Filter>
            <span>날짜 설정</span> <BottomArrowSmallIcon />
          </S.Filter>
        </S.FilterContainer>
        <S.CheckboxContainer>
          <IsRecruiting />
        </S.CheckboxContainer>
      </S.FilterAndCheckbox>
    </S.Wrapper>
  );
};

export default MatchingHeader;

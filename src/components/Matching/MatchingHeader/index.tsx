import React from 'react';
import BottomArrowSmallIcon from '@assets/icon/bottom-arrow-small.svg';
import { WorkoutPart, PreferGender, GymName, IsRecruiting, SearchInput } from '@components/Matching/MatchingFilter';
import * as S from './style';

const MatchingHeader = () => {
  return (
    <S.Wrapper>
      <GymName />
      <SearchInput />
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

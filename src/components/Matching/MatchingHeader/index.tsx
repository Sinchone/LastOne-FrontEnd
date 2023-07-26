import React from 'react';
import {
  WorkoutPart,
  PreferGender,
  GymName,
  IsRecruiting,
  SearchInput,
  Date,
} from '@components/Matching/MatchingFilter';
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
          <Date />
        </S.FilterContainer>
        <S.CheckboxContainer>
          <IsRecruiting />
        </S.CheckboxContainer>
      </S.FilterAndCheckbox>
    </S.Wrapper>
  );
};

export default MatchingHeader;

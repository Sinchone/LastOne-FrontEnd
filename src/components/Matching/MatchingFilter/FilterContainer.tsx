import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
  isSelected: boolean;
}

const FilterContainer = ({ children, isSelected }: Props) => {
  return <S.Wrapper isSelected={isSelected}>{children}</S.Wrapper>;
};

export default FilterContainer;

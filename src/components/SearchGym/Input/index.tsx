import React from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';

interface Props {
  searchPlace: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ handleChangeInput, searchPlace }: Props) => {
  return (
    <S.SearchInput>
      <SearchIcon />
      <input placeholder="헬스장을 검색해보세요." autoFocus value={searchPlace} onChange={handleChangeInput} />
    </S.SearchInput>
  );
};

export default Input;

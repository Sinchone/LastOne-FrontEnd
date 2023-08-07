import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';
import { MATCHING_PAGE } from '@constants/route';

const SearchInput = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(router.query.title);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.slice(0, 20));
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      router.push({
        pathname: MATCHING_PAGE,
        query: { ...router.query, title: searchInput },
      });
  };

  useEffect(() => {
    setSearchInput(router.query.title);
  }, [router.query]);

  return (
    <S.SearchInput>
      <SearchIcon />
      <input
        placeholder="제목과 헬스장을 검색해보세요."
        value={searchInput}
        onChange={handleChangeInput}
        onKeyDown={handleSubmit}
        maxLength={20}
      />
    </S.SearchInput>
  );
};

export default SearchInput;

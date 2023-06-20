import React, { ReactElement, useState } from 'react';
import { Layout, Input } from '@components/SearchGym';
import { NextPageWithLayout } from '@pages/_app';
import { Map, Navigation } from '@components/Common';
import { setAccessTokenToCookie } from '@utils/token';

const SearchGym: NextPageWithLayout = () => {
  const [searchPlace, setSearchplace] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchplace(e.target.value);
  };
  return (
    <>
      <Input searchPlace={searchPlace} handleChangeInput={handleChangeInput} />
      <Map searchPlace={searchPlace} />
    </>
  );
};

SearchGym.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SearchGym;

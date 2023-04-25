import React, { useState } from 'react';
import KakaoMap from '../KakaoMap';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';

const MapContainer = () => {
  const [address, setAddress] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeMap = (e: any) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <S.MapTitle>헬스장 위치</S.MapTitle>
      <div>
        <S.InputWrapper>
          <SearchIcon />
          <S.PlaceInput placeholder="헬스장 위치를 검색해보세요" onChange={onChangeMap} />
        </S.InputWrapper>

        <KakaoMap address={address} />
      </div>
    </div>
  );
};

export default MapContainer;

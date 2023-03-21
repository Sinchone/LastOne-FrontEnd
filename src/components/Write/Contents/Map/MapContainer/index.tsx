import React, { useState } from 'react';
import KakaoMap from '../KakaoMap';
import * as S from './style';

const MapContainer = () => {
  const [address, setAddress] = useState('');

  const onChangeMap = (e: any) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <S.MapTitle>헬스장 위치</S.MapTitle>
      <div>
        <S.InputWrapper>
          {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_410_2877)">
              <path
                d="M20.6667 18.6667H19.6133L19.24 18.3067C20.5467 16.7867 21.3333 14.8133 21.3333 12.6667C21.3333 7.88 17.4533 4 12.6667 4C7.88 4 4 7.88 4 12.6667C4 17.4533 7.88 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667Z"
                fill="#68696B"
              />
            </g>
            <defs>
              <clipPath id="clip0_410_2877">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
          <S.PlaceInput placeholder="헬스장 위치를 검색해보세요" onChange={onChangeMap} />
        </S.InputWrapper>

        <KakaoMap />
      </div>
    </div>
  );
};

export default MapContainer;
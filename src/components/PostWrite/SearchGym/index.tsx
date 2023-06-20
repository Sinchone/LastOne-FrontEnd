import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { GymInfoType } from '@typing/user';
import SearchIcon from '@assets/icon/search.svg';
import { Map } from '@components/Common';

interface Props {
  setChangeSearchPlace: (place: any) => void;
  handleCloseSearch: () => void;
}

const SearchGym = ({ setChangeSearchPlace, handleCloseSearch }: Props) => {
  const [searchPlace, setSearchPlace] = useState('');
  const [clickedLocation, setClickedLocation] = useState<GymInfoType>({
    name: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlace(e.target.value);
  };

  const handleClickLocation = (place: any) => {
    setClickedLocation({
      name: place.place_name,
      location: place.address_name,
      latitude: place.x,
      longitude: place.y,
    });
  };

  const handleClickGym = () => {
    setChangeSearchPlace(clickedLocation);
    handleCloseSearch();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => {
      setClickedLocation({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
      });
      setSearchPlace('');
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Input>
        <SearchIcon />
        <input ref={inputRef} onChange={handleChangeInput} placeholder="헬스장을 검색해주세요." />
      </S.Input>
      <Map searchPlace={searchPlace} handleClickLocation={handleClickLocation} />
      <S.ButtonGroup>
        <S.CancelButton onClick={handleCloseSearch}>취소</S.CancelButton>
        <S.Button onClick={handleClickGym}>등록</S.Button>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default SearchGym;

import React, { useState, useEffect } from 'react';
import * as S from './style';
import { GymInfoType } from '@typing/user';
import SearchIcon from '@assets/icon/search.svg';
import { Map } from '@components/Common';

interface Props {
  setChangeGymState: (place: any) => void;
  handleCloseSearch: () => void;
}

const SearchGym = ({ setChangeGymState, handleCloseSearch }: Props) => {
  const [searchPlace, setSearchplace] = useState('');
  const [clickedLocation, setClickedLocation] = useState<GymInfoType>({
    name: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchplace(e.target.value);
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
    setChangeGymState(clickedLocation);
    handleCloseSearch();
  };

  useEffect(() => {
    return () => {
      setClickedLocation({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
      });
      setSearchplace('');
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Input>
        <SearchIcon />
        <input onChange={handleChangeInput} placeholder="헬스장을 검색해주세요." />
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

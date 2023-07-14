import { useState } from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';
import ProfileIcon from '@assets/icon/profilelarge.svg';

const Content = () => {
  const [searchPartner, setSearchPartner] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPartner(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.Input>
        <SearchIcon />
        <input value={searchPartner} onChange={handleChangeInput} placeholder="파트너를 검색해보세요." />
      </S.Input>

      <S.PartnerList>
        {Array.from({ length: 10 }, (v, i) => i).map((i) => (
          <S.Partner key={i}>
            <ProfileIcon />

            <S.PartnerInfo>
              <div>
                <span>운동광</span>
                <S.Gender>남성</S.Gender>
              </div>
              <span>2023.04.12</span>
            </S.PartnerInfo>

            <S.ButtonContainer>
              <S.ProfileButton onClick={() => alert('프로필 상세 페이지로 이동')}>프로필 상세</S.ProfileButton>
              <S.ChattingButton onClick={() => alert('채팅 페이지로 이동')}>채팅하기</S.ChattingButton>
            </S.ButtonContainer>
          </S.Partner>
        ))}
      </S.PartnerList>
    </S.Wrapper>
  );
};

export default Content;

import { useState } from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';
import ProfileIcon from '@assets/icon/profilelarge.svg';


const Content = ({partnerList}) => {
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
        {partnerList.map((p) => (
          <S.Partner key={p.id}>
            <ProfileIcon />

            <S.PartnerInfo>
              <div>
                <span>{p.nickname}</span>
                <S.Gender>{p.gender}</S.Gender>
              </div>
              <span>{p.workoutDate}</span>
            </S.PartnerInfo>

            <S.ButtonContainer>
              <S.ProfileButton onClick={() => alert('프로필 상세 페이지로 이동')}>프로필 상세</S.ProfileButton>
            </S.ButtonContainer>
          </S.Partner>
        ))}
      </S.PartnerList>
    </S.Wrapper>
  );
};

export default Content;

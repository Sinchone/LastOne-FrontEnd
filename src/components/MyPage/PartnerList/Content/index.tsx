import { useState, useEffect } from 'react';
import * as S from './style';
import SearchIcon from '@assets/icon/search.svg';
import { useRouter } from 'next/router';
import { PartnerListType } from '@typing/Partner';
import { createImageUrl } from '@utils/createImageUrl';
import ProfileIcon from '@assets/icon/profilelarge.svg';

interface Props {
  partnerList: PartnerListType[];
}

const Content = ({ partnerList }: Props) => {
  const router = useRouter();
  const [searchPartner, setSearchPartner] = useState('');
  const [filteredPartnerList, setFilteredPartnerList] = useState<PartnerListType[]>(partnerList);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPartner(e.target.value);
  };

  const executeSearch = () => {
    if (searchPartner.trim() === '') {
      setFilteredPartnerList(partnerList); // 검색어가 없는 경우, 전체 파트너 목록을 보여줍니다.
      return;
    }
    const filteredList = partnerList.filter((partner) => {
      return partner.nickname.toLowerCase().includes(searchPartner.toLowerCase());
    });
    setFilteredPartnerList(filteredList);
  };

  useEffect(() => {
    executeSearch();
  }, [searchPartner]);

  useEffect(() => {
    setFilteredPartnerList(partnerList);
  }, [partnerList]);

  return (
    <S.Wrapper>
      <S.Input>
        <SearchIcon />
        <input value={searchPartner} onChange={handleChangeInput} placeholder="파트너를 검색해보세요." />
      </S.Input>
      <S.PartnerList>
        {filteredPartnerList !== undefined ? (
          filteredPartnerList.map((p) => (
            <S.Partner key={p.id}>
              <S.ProfileButton onClick={() => {router.push(`/mypage/${p.id}`);}}>
                {p.profileUrl ? (
                  <S.ImageWrapper>
                    <img src={createImageUrl(p.profileUrl as string)} alt='profileImg'/>
                  </S.ImageWrapper> ) :(
                  <ProfileIcon/>
                )}
              </S.ProfileButton>
              <S.PartnerInfo>
                <div>
                  <span>{p.nickname}</span>
                  <S.Gender>{p.gender}</S.Gender>
                </div>
                <span>{p.workoutDate}</span>
              </S.PartnerInfo>
            </S.Partner>
          ))
        ) : (
          <S.NoPartner>운동 파트너가 존재하지 않습니다.</S.NoPartner>
        )}
      </S.PartnerList>
    </S.Wrapper>
  );
};

export default Content;

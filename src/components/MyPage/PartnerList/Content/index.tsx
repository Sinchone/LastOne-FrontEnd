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
        {filteredPartnerList.map((p) => (
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
        ))}
      </S.PartnerList>
    </S.Wrapper>
  );
};

export default Content;
//<svg width="55" height="55" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#E5E5E7"></rect><mask id="profilelarge_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha;"><rect width="48" height="48" rx="24" fill="#000C4A"></rect></mask><g mask="url(#profilelarge_svg__a)" fill="#000C4A"><rect x="16" y="12" width="16" height="16" rx="8"></rect><rect x="8" y="30" width="32" height="25" rx="12.5"></rect></g></svg>

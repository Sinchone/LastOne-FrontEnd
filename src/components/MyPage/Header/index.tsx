import React, { useState } from 'react';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import PenCilIcon from '@assets/icon/pencil.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MY_PAGE_EDIT } from '@constants/route';
import { logout } from '@apis/user';
import { removeAccessTokenToCookie, removeRefreshTokenToCookie } from '@utils/token';
import { Modal } from '@components/Common';

interface Props {
  nickname?: string;
}

const Header = ({ nickname }: Props) => {
  const router = useRouter();
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const handleRouteBack = () => {
    router.back();
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
    removeAccessTokenToCookie();
    removeRefreshTokenToCookie();
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>{nickname ? `${nickname}님 프로필` : '마이페이지'}</span>

      <S.ButtonContainer>
        {!nickname && (
          <>
            <S.LogoutButton onClick={() => setIsLogoutModal(true)}>로그아웃</S.LogoutButton>
            <Link replace href={MY_PAGE_EDIT}>
              <PenCilIcon />
            </Link>
          </>
        )}
      </S.ButtonContainer>

      {isLogoutModal && (
        <Modal
          isOpen={isLogoutModal}
          handleClose={() => setIsLogoutModal(false)}
          handleConfirm={handleLogout}
          text={{
            label: '정말로 로그아웃 하시겠어요?',
            confirm: '로그아웃',
            cancel: '취소',
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default Header;

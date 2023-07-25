import React, { useState } from 'react';
import * as S from './style';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import { useRouter } from 'next/router';
import { useGetUserInfo } from '@hooks/common/queries';
import { Modal } from '@components/Common';

const GymName = () => {
  const { showBottomSheet } = useBottomSheet();
  const router = useRouter();
  const gymName = router.query.gymName as string | undefined;

  const { currentUserIsEdited, isLogin } = useGetUserInfo();
  const [modal, setModal] = useState('');

  const handleClick = () => {
    if (!isLogin) setModal('login');
    else if (!currentUserIsEdited) setModal('edit');
    else showBottomSheet('GymName');
  };

  const loginModal = (
    <Modal
      hasArrow
      isOpen={modal === 'login'}
      handleClose={() => setModal('')}
      handleConfirm={() => router.push('/login')}
      text={{
        label: '로그인 후 이용 가능해요',
        confirm: '로그인 하러가기',
        cancel: '다음에 하기',
      }}
    />
  );

  const editModal = (
    <Modal
      hasArrow
      isOpen={modal === 'edit'}
      handleClose={() => setModal('')}
      handleConfirm={() => router.push('/mypage')}
      text={{
        label: '헬스장 등록 후 이용 가능해요',
        confirm: '헬스장 등록하러 가기',
        cancel: '다음에 하기',
      }}
    />
  );

  const modalType: any = { login: loginModal, edit: editModal };

  return (
    <>
      <S.Wrapper onClick={handleClick}>
        <span className="location">{gymName ? gymName : '전체'}</span>
        <BottomArrowIcon className="arrow_icon" />
      </S.Wrapper>
      {modal && modalType[modal]}
    </>
  );
};

export default GymName;

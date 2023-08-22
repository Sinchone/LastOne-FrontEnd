import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import { isMapShowState } from '@recoil/postWrite';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { deletePostById } from '@apis/post';
import { Modal } from '@components/Common';
import { useState } from 'react';

interface Props {
  isEdit?: boolean;
  postId?: number;
}

const Header = ({ isEdit, postId }: Props) => {
  const router = useRouter();
  const [isMapShow, setIsMapShow] = useRecoilState(isMapShowState);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const handleRouteBack = () => {
    isMapShow ? setIsMapShow(false) : router.back();
  };

  const handleDeletePost = () => {
    if (postId) {
      deletePostById(postId).then(() => {
        setIsDeleteSuccess(true);
        router.replace('/');
      });
    }
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>{isMapShow ? '헬스장 검색' : '글쓰기'}</span>
      {isEdit && <S.DeleteButton onClick={() => setIsDeleteModal(true)}>삭제</S.DeleteButton>}

      {isDeleteModal && (
        <Modal
          isOpen={isDeleteModal}
          handleClose={() => setIsDeleteModal(false)}
          handleConfirm={handleDeletePost}
          isSuccess={isDeleteSuccess}
          setIsSuccess={setIsDeleteSuccess}
          text={{
            label: '정말로 게시물을\n삭제하시겠어요?',
            confirm: '삭제하기',
            cancel: '아니오',
            success: '성공적으로\n삭제 되었습니다!',
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default Header;

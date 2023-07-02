import { deletePostById } from '@apis/post';
import * as S from './style';
import LeftArrowIcon from '@assets/icon/left-arrow.svg';
import { Modal } from '@components/Common';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
  isOther: boolean;
  postId?: number;
}

const Header = ({ isOther, postId }: Props) => {
  const router = useRouter();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const handleRouteBack = () => {
    router.back();
  };

  const handleDeletePost = () => {
    if (postId) {
      deletePostById(postId).then((response) => {
        console.log(response);
        setIsDeleteSuccess(true);
        router.replace('/');
      });
    }
  };

  return (
    <S.Wrapper>
      <LeftArrowIcon onClick={handleRouteBack} />
      <span>{isOther ? '게시물 상세' : '내 게시물'}</span>
      {!isOther && <S.DeleteButton onClick={() => setIsDeleteModal(true)}>삭제</S.DeleteButton>}

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

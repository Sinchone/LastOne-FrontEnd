import { useState } from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import Modal from '../Modal';

interface Props {
  menu: string;
  type: string;
}

const Item = ({ menu, type }: Props) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <S.Wrapper>
      <S.Profile>
        <ProfileIcon />
        <span>운동관</span>
      </S.Profile>
      <S.Contour />
      <S.Gender>남성</S.Gender>
      <S.Contour />
      <span className="time">30분전 신청</span>
      <S.ButtonGroup>
        <S.Button menu={menu} type={type} onClick={() => type !== 'disabled' && setIsModal(true)} />
        <S.Button type={'chatting'} />
      </S.ButtonGroup>
      {isModal && <Modal isOpen={isModal} handleClose={() => setIsModal(false)} menu={menu} type={type} />}
    </S.Wrapper>
  );
};

export default Item;

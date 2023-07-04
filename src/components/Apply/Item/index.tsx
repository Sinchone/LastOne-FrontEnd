import { useState } from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import { ReceivedApplication, RequestedApplication } from '@typing/application';
import moment from 'moment';
import ApplicationModal from '../Modal';
import { useRecoilValue } from 'recoil';
import { currentMenuState } from '@recoil/application';
import { cancelMatching, completeMatching, deleteApplication } from '@apis/application';

interface Props {
  recruitmentId: number;
  data: ReceivedApplication | RequestedApplication;
}

const Item = ({ recruitmentId, data }: Props) => {
  const menu = useRecoilValue(currentMenuState);
  const [isModal, setIsModal] = useState(false);

  // const types = {
  //   FAILURE: 'disabled',
  //   SUCCESS: 'cancel',
  //   WAITING: 'default',
  //   CANCEL: 'default',
  // };

  const handleButtonClick = () => {
    if (menu === 'received')
      return data.status === 'SUCCESS'
        ? cancelMatching(recruitmentId, data.applicationId)
        : completeMatching(recruitmentId, data.applicationId);

    // TODO: 요청한 신청 중, status가 SUCCESS인 경우 API 수정
    return data.status === 'WAITING' ? deleteApplication(data.applicationId) : deleteApplication(data.applicationId);
  };

  return (
    <S.Wrapper>
      <S.Profile>
        <ProfileIcon />
        <span>{data.nickname}</span>
      </S.Profile>
      <S.Contour />
      <S.Gender>{data.gender}</S.Gender>
      <S.Contour />
      <span className="time">{moment(data.applicationDate, 'YYYY.MM.DD HH:mm').format('MM.DD HH:mm')}</span>
      <S.ButtonGroup>
        <S.Button menu={menu} type={data.status} onClick={() => data.status !== 'FAILURE' && setIsModal(true)} />
        <S.Button type={'chatting'} />
      </S.ButtonGroup>
      {isModal && (
        <ApplicationModal
          isOpen={isModal}
          handleClose={() => setIsModal(false)}
          handleButtonClick={handleButtonClick}
          recruitmentId={recruitmentId}
          data={data}
        />
      )}
    </S.Wrapper>
  );
};

export default Item;

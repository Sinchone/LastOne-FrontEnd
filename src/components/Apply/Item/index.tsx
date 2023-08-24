import { useState } from 'react';
import * as S from './style';
import ProfileIcon from '@assets/icon/profile.svg';
import { ReceivedApplication, RequestedApplication } from '@typing/application';
import moment from 'moment';
import ApplicationModal from '../Modal';
import { useRecoilValue } from 'recoil';
import { currentMenuState } from '@recoil/application';
import { cancelMatching, completeMatching, deleteApplication } from '@apis/application';
import { createImageUrl } from '@utils/createImageUrl';
import Image from 'next/image';
import { createChattingRoom } from '@apis/chatting';
import { useRouter } from 'next/router';

interface Props {
  recruitmentId: number;
  data: ReceivedApplication | RequestedApplication;
}

const Item = ({ recruitmentId, data }: Props) => {
  const router = useRouter();
  const menu = useRecoilValue(currentMenuState);
  const [isModal, setIsModal] = useState(false);

  const handleButtonClick = () => {
    if (menu === 'received')
      return data.status === 'SUCCESS'
        ? cancelMatching(recruitmentId, data.applicationId)
        : completeMatching(recruitmentId, data.applicationId);

    // TODO: 요청한 신청 중, status가 SUCCESS인 경우 API 수정
    return data.status === 'WAITING' ? deleteApplication(data.applicationId) : deleteApplication(data.applicationId);
  };

  const handleChatButton = (memberId: number) => {
    const promise = createChattingRoom(memberId);
    promise.then((response) => {
      const roomId = response.data;
      router.push(`/chatting/${roomId}`)
    }).catch((error) => {
      console.log("채팅방 생성 에러", error);
    });
  };

  return (
    <S.Wrapper>
      <S.Profile>
        {data.profileUrl ? (
          <Image
            src={createImageUrl(data.profileUrl as string)}
            width={64}
            height={64}
            alt="profile"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <ProfileIcon />
        )}
        <span>{data.nickname}</span>
      </S.Profile>
      <S.Contour />
      <S.Gender>{data.gender}</S.Gender>
      <S.Contour />
      <span className="time">{moment(data.applicationDate, 'YYYY.MM.DD HH:mm').format('MM.DD HH:mm')}</span>
      <S.ButtonGroup>
        <S.Button menu={menu} type={data.status} onClick={() => data.status !== 'FAILURE' && setIsModal(true)} />
        <S.Button type={'chatting'} onClick={() => handleChatButton(menu === 'received'? 
        (data as ReceivedApplication).applicantId : (data as RequestedApplication).memberId)} />
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

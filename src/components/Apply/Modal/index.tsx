import { Modal } from '@components/Common';
import { currentMenuState } from '@recoil/application';
import { ReceivedApplication, RequestedApplication } from '@typing/application';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleButtonClick: () => Promise<AxiosResponse<any, any>>;
  recruitmentId: number;
  data: ReceivedApplication | RequestedApplication;
}

const ApplicationModal = ({ isOpen, handleClose, handleButtonClick, data }: Props) => {
  const menu = useRecoilValue(currentMenuState);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalContents = {
    received: {
      WAITING: {
        text: {
          label: `"${data.nickname}"님을 파트너로\n매칭 하시겠어요?`,
          confirm: '매칭하기',
          cancel: '아니오',
          success: '성공적으로\n매칭 되었습니다!',
        },
        buttonColor: 'blue',
      },
      SUCCESS: {
        text: {
          label: `"${data.nickname}"님과 파트너를\n취소 하시겠어요?`,
          confirm: '취소하기',
          cancel: '아니오',
          success: '성공적으로\n취소되었습니다.',
        },
        buttonColor: 'red',
      },
    },
    requested: {
      WAITING: {
        text: {
          label: '정말로 파트너 매칭 신청을\n취소하시겠어요?',
          confirm: '신청취소',
          cancel: '아니오',
          success: '성공적으로\n취소되었습니다!',
        },
        buttonColor: 'green',
      },
      SUCCESS: {
        text: {
          label: '파트너에게 취소\n요청을 보내시겠어요?',
          confirm: '취소요청',
          cancel: '아니오',
          success: '파트너에게\n취소요청을 보냈습니다!',
        },
        buttonColor: 'red',
      },
    },
  };
  const modalContent = modalContents[menu][data.status as 'WAITING' | 'SUCCESS'];

  const handleConfirm = () => {
    handleButtonClick()
      .then((response) => {
        console.log(response);
        setIsSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      handleConfirm={handleConfirm}
      isSuccess={isSuccess}
      setIsSuccess={setIsSuccess}
      buttonColor={modalContent.buttonColor as 'red' | 'green' | 'blue'}
      text={modalContent.text}
    />
  );
};

export default ApplicationModal;

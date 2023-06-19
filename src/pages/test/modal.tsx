import ModalLayout from '@components/Common/ModalLayout';
import { ConfirmModal, ModalButton, SuccessModal } from '@components/Common/CustomModal';
import { useState } from 'react';
import styled from 'styled-components';

const ModalTest = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [isModal4, setIsModal4] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <FlexContainer>
      <button onClick={() => setIsModal(true)}>Modal</button>
      {isModal && (
        <ModalLayout isOpen={isModal} handleClose={() => setIsModal(false)}>
          <Wrapper>test</Wrapper>
        </ModalLayout>
      )}

      <button onClick={() => setIsModal2(true)}>ConfirmModal</button>
      {isModal2 && (
        <ConfirmModal isOpen={isModal2} handleClose={() => setIsModal2(false)} label={'확인 모달'}>
          <ModalButton onClick={() => alert('처리되었습니다.')}>예</ModalButton>
          <ModalButton onClick={() => setIsModal2(false)} color="gray">
            아니오
          </ModalButton>
        </ConfirmModal>
      )}

      <button onClick={() => setIsModal3(true)}>ConfirmModal + SuccessModal</button>
      {isModal3 && (
        <ConfirmModal isOpen={isModal3} handleClose={() => setIsModal3(false)} label={'확인 모달 + 성공 모달'}>
          <ModalButton
            onClick={() => {
              setIsModal3(false);
              setIsSuccess(true);
            }}
          >
            예
          </ModalButton>
          <ModalButton onClick={() => setIsModal3(false)} color="gray">
            아니오
          </ModalButton>
        </ConfirmModal>
      )}
      {isSuccess && (
        <SuccessModal isOpen={isSuccess} handleClose={() => setIsSuccess(false)}>
          성공적으로 어쩌구
        </SuccessModal>
      )}

      <button onClick={() => setIsModal4(true)}>ModalButton</button>
      {isModal4 && (
        <ConfirmModal
          isOpen={isModal4}
          handleClose={() => setIsModal4(false)}
          label={"color 기본값: 'blue'\n그 외 'red', 'green', 'gray'"}
        >
          <ModalButton onClick={() => alert('red 버튼 클릭')} color="red">
            color: red
          </ModalButton>
          <ModalButton onClick={() => alert('green 버튼 클릭')} color="green">
            color: green
          </ModalButton>
        </ConfirmModal>
      )}
    </FlexContainer>
  );
};

export default ModalTest;

const FlexContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 474px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

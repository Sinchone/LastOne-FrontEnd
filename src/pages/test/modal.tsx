import { Modal } from '@components/Common';
import ModalLayout from '@components/Common/ModalLayout';
import { useState } from 'react';
import styled from 'styled-components';

const ModalTest = () => {
  const [isModal, setIsModal] = useState(false);

  const [isCustomModal, setIsCustomModal] = useState(false);
  const messages = { label: '어쩌구 하시겠습니까?', confirm: '네', cancel: '아니오', success: '성공!' };

  return (
    <FlexContainer>
      <button onClick={() => setIsModal(true)}>Modal</button>
      {isModal && (
        <ModalLayout isOpen={isModal} handleClose={() => setIsModal(false)}>
          <Wrapper>test</Wrapper>
        </ModalLayout>
      )}

      <button onClick={() => setIsCustomModal(true)}>Test!!!Button</button>
      {isCustomModal && (
        <Modal
          isOpen={isCustomModal}
          handleClose={() => setIsCustomModal(false)}
          handleConfirm={() => console.log('confirm!!')}
          buttonColor="green"
          text={messages}
        />
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

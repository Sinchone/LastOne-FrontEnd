import ModalLayout from '@components/Common/ModalLayout';
import { useState } from 'react';
import styled from 'styled-components';

const ModalTest = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <button onClick={() => setIsModal(true)}>Modal</button>
      {isModal && (
        <ModalLayout isOpen={isModal} handleClose={() => setIsModal(false)}>
          <Wrapper>test</Wrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default ModalTest;

const Wrapper = styled.div`
  width: 474px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

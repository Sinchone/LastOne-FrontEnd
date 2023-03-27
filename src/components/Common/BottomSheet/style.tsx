import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
  z-index: 101;
`;

export const Wrapper = styled.div`
  z-index: 102;
  position: fixed;
  width: 100%;
  max-width: 768px;
  height: fit-content;
  max-height: 90%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  bottom: 0;
  border-radius: 8px 8px 0 0;
  background-color: var(--color-gray1);

  .icon {
    position: absolute;
    top: 10px;
    left: 45%;
  }
`;

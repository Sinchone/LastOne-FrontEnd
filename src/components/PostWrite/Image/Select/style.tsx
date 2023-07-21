import styled from 'styled-components';
import Close from '@assets/icon/close.svg';

export const Wrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  input {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  position: relative;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

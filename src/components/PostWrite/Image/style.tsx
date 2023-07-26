import styled from 'styled-components';
import Close from '@assets/icon/close.svg';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImagesArea = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 180px;
  display: flex;
  gap: 16px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: green;
  position: relative;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const TestWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 180px;
  display: flex;
  gap: 16px;
`;

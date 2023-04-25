import theme from '@styles/theme';
import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

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
  max-width: 620px;
  height: fit-content;
  max-height: 60%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  bottom: 0;
  border-radius: 8px 8px 0 0;
  background-color: var(--color-gray1);
  animation: ${SlideUp} 0.5s;

  .icon {
    position: absolute;
    top: 10px;
    left: 45%;
  }

  ${theme.media.tablet} {
    max-width: 768px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${theme.media.mobile2} {
    max-width: 620px;
  }
`;

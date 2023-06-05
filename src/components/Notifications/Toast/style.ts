import styled, { keyframes } from 'styled-components';
import theme from '@styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.section<{ unmount: boolean }>`
  background: var(--color-gray1);
  width: calc(620px - 48px);
  padding: 16px;

  position: fixed;
  bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px dashed var(--color-primary-main);
  border-radius: 6px;

  animation: ${(props) => (props.unmount ? fadeOut : fadeIn)} 0.4s;
  z-index: 10;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-primary-main);
    user-select: none;
  }

  ${theme.media.tablet} {
    width: calc(100% - 48px);
  }
`;

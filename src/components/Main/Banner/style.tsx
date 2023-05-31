import theme from '@styles/theme';
import { RefObject } from 'react';
import styled from 'styled-components';

interface slideProps {
  ref: RefObject<HTMLDivElement>;
  onMouseDown: (e: any) => void;
  onMouseUp: (e: any) => void;
  onMouseMove: (e: MouseEvent) => void;
}

export const Wrapper = styled.section`
  width: 100%;
  background-color: var(--color-gray1);
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerSlide = styled.div<slideProps>`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${theme.media.tablet} {
    overflow: scroll;
    scroll-snap-type: x mandatory;
  }
`;

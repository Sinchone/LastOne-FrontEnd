import theme from '@styles/theme';
import styled from 'styled-components';

export const LayoutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: var(--color-primary-main);
  overflow: hidden;

  ${theme.media.tablet} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  ${theme.media.mobile2} {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
`;

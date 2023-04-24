import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  min-width: 600px;
  max-width: 620px;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: var(--color-gray1);
  margin: 0 auto;
  position: relative;

  ${theme.media.tablet} {
    box-shadow: none;
    min-width: 768px;
    max-width: 768px;
  }

  ${theme.media.mobile2} {
    min-width: 600px;
    max-width: 620px;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 768px;
  height: 100%;
`;

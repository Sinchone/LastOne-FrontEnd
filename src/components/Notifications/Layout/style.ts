import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  ${theme.media.laptop} {
    overflow: hidden;
  }
`;

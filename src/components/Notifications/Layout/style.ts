import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  ${theme.media.laptop} {
    overflow: hidden;
  }
`;

export const DeleteButton = styled.div<{ onClick: () => void }>`
  ${theme.font.ko.subTitle1}
  cursor: pointer;
`;

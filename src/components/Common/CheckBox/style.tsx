import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .checkbox_title {
    ${theme.font.ko.body1}
  }
`;

export const Checkbox = styled.div`
  width: 13px;
  height: 13px;
  border: solid var(--color-gray8);
  display: flex;
`;

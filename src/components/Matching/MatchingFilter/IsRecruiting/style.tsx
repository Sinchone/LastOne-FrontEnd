import styled from 'styled-components';
import theme from '@styles/theme';

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  span {
    ${theme.font.ko.body1}
    white-space: nowrap;
  }
`;

export const UnChecked = styled.div`
  width: 13px;
  height: 13px;
  border: solid var(--color-gray8);
  display: flex;
`;

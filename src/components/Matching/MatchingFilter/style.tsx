import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isSelected: boolean }>`
  width: 80px;
  height: 30px;
  border-radius: 6px;
  background-color: ${(props) => (props.isSelected ? 'var(--color-primary-main)' : '#eeeeee')};
  ${theme.font.ko.body1}
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;

  span {
    color: ${(props) => (props.isSelected ? 'var(--color-white)' : 'var(--color-gray9)')};
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

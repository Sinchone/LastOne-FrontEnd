import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: ${(props) => (props.isSelected ? 'var(--color-primary-main)' : '#eeeeee')};
  ${theme.font.ko.body1}
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

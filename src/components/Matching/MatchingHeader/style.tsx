import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px;
  gap: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    ${theme.font.ko.body1}
  }
`;

export const FilterAndCheckbox = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 83%;
`;

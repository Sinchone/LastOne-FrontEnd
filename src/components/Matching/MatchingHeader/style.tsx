import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px;
  gap: 20px;
`;

export const LocationAndSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  svg {
    margin-right: 20px;
  }

  .location {
    ${theme.font.ko.subTitle1}
  }
  .checkbox_title {
    ${theme.font.ko.body1}
  }
`;

export const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border: solid var(--color-gray8);
  display: flex;
  margin-right: 5px;
`;

export const SearchInput = styled.div`
  width: 720px;
  height: 48px;
  padding: 8px 8px 8px 20px;
  border-radius: 6px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  gap: 13px;

  input {
    background-color: #eeeeee;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2%;
    color: var(--color-gray8);
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

export const Filter = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: #eeeeee;
  ${theme.font.ko.body1}
  color: var(--color-gray9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

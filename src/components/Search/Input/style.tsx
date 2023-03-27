import styled from 'styled-components';

export const SearchInput = styled.div`
  width: 730px;
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

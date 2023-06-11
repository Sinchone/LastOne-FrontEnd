import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px 8px 20px;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`;

export const SearchHistory = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  user-select: none;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -2%;
  }
`;

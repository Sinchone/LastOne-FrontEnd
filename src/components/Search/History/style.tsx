import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  width: 730px;
  padding: 8px 8px 8px 20px;
  align-items: center;
`;

export const SearchHistory = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -2%;
  }
`;

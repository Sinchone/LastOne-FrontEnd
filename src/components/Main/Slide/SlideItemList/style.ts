import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: calc((80% + 16px) * 3 - 16px);
  padding: 0 15%;
`;

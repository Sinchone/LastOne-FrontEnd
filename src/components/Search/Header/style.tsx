import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 16px 24px 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);

  svg {
    flex: 1.9;
    cursor: pointer;
  }

  span {
    flex: 2.2;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -1%;
  }
`;

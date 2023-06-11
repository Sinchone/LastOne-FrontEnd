import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 16px 24px 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);

  svg {
    position: absolute;
    left: 24px;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  span {
    font-weight: 700;
    font-size: 24px;
  }
`;

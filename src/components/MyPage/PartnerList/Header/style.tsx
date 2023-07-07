import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 10px 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);

  position: sticky;
  top: 0;
  z-index: 100;
  user-select: none;

  svg {
    position: absolute;
    left: 24px;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  & > span {
    font-weight: 700;
    font-size: 18px;
  }
`;

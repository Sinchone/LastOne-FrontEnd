import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 10px 24px 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 100;

  svg {
    cursor: pointer;
    position: absolute;
    left: 20px;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: -1%;
  }
`;

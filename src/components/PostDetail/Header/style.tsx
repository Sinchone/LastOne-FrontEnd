import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 16px 24px 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);

  svg {
    cursor: pointer;
    position: absolute;
    left: 20px;
  }

  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -1%;
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  right: 24px;

  font-weight: 500;
  font-size: 16px;
  color: var(--color-gray8);

  user-select: none;
  cursor: pointer;
`;

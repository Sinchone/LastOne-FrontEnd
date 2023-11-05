import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 16px 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 100;

  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const Left = styled(Item)`
  position: absolute;
  left: 20px;
  cursor: pointer;
`;

export const Center = styled(Item)`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1%;

  span {
    margin-left: 5px;
    font-size: 13px;
    line-height: 16px;
    padding: 5px 8px;
    border-radius: 5px;
    background-color: #000c4a;
    color: #fefefe;
  }
`;

export const Right = styled(Item)`
  position: absolute;
  right: 20px;
  white-space: nowrap;
`;

import styled from 'styled-components';
export const Wrapper = styled.div``;

export const DescriptionImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  & svg {
    z-index: 2;
    position: absolute;
  }

  > div:first-of-type {
    width: 100%;
    height: 180px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 16px;
  }
`;

export const DescriptionImage = styled.div`
  width: 230px;
  height: 180px;
  background-color: var(--color-gray2);
  border-radius: 8px;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: var(--color-black);

  opacity: 0.5;
`;

export const Box = styled.div`
  width: fit-content;
  height: fit-content;
  z-index: 1000;
  border-radius: 12px;
  background-color: var(--color-white);
  box-shadow: 0px 0px 10px rgba(0, 27, 54, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

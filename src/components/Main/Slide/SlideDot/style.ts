import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  position: absolute;
  bottom: 30px;
  left: 30px;
`;

export const Dot = styled.div<{ isCenter: boolean }>`
  width: 8px;
  height: 8px;

  background-color: var(${(props) => (props.isCenter ? '--color-primary-main' : '--color-gray3')});
  border-radius: 4px;
`;

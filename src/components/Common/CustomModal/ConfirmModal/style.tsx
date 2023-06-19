import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 470px;
  height: calc(100vh * 0.5);
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  white-space: pre-line;
  user-select: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

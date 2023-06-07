import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.div`
  padding: 80px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  user-select: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button<{ cancel?: boolean }>`
  width: 420px;
  padding: 16px 0;

  background-color: var(${(props) => (props.cancel ? '--color-gray2' : '--color-primary-main')});
  border-radius: 8px;
  border: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(${(props) => (props.cancel ? '--color-gray7' : '--color-white')});

  cursor: pointer;
  user-select: none;
`;

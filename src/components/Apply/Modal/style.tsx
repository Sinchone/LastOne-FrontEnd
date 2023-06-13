import styled from 'styled-components';

interface ButtonColorTypes {
  [key: string]: string;
  blue: string;
  red: string;
  green: string;
}

export const Wrapper = styled.main`
  width: 470px;
  height: 410px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  white-space: pre-line;
  user-select: none;
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

const buttonColors: ButtonColorTypes = {
  blue: '--color-primary-main',
  red: '--color-error',
  green: '--color-secondary-main',
};

export const Button = styled.button<{ cancel?: boolean; color?: string }>`
  width: 420px;
  padding: 16px 0;

  background-color: var(${(props) => props.cancel && '--color-gray2'});
  background-color: var(${(props) => props.color && buttonColors[props.color]});
  border-radius: 8px;
  border: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(${(props) => (props.cancel ? '--color-gray7' : '--color-white')});

  cursor: pointer;
  user-select: none;
`;

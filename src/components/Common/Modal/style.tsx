import styled from 'styled-components';

interface ButtonColorTypes {
  [key: string]: string;
  blue: string;
  red: string;
  green: string;
  gray: string;
}

const buttonColors: ButtonColorTypes = {
  blue: '--color-primary-main',
  red: '--color-error',
  green: '--color-secondary-main',
  gray: '--color-gray2',
};

export const Wrapper = styled.main`
  width: 470px;
  height: calc(100vh * 0.5);
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
  color: var(--color-black);

  user-select: none;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button<{ color: string }>`
  width: 420px;
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: var(${(props) => buttonColors[props.color]});
  border-radius: 8px;
  border: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(${(props) => (props.color === 'gray' ? '--color-gray7' : '--color-white')});

  cursor: pointer;
  user-select: none;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: var(${(props) => (props.color === 'gray' ? '--color-gray7' : '--color-white')});
    }
  }
`;

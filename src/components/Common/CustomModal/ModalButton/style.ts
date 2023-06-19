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

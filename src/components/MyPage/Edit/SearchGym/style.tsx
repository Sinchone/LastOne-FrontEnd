import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 38px 17px;
`;

export const Input = styled.div`
  width: 100%;
  height: 38px;
  padding: 1px 8px 1px 20px;
  border-radius: 6px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 24px;

  input {
    background-color: #eeeeee;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;

    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: -2%;
    color: var(--color-gray8);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 45px;
  padding-left: 11px;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  color: #001b36;
  width: 252px;
  height: 46px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  ${theme.font.ko.subTitle2}

  cursor: pointer;
`;

export const Button = styled.button`
  color: var(--color-white);
  border-radius: 6px;
  width: 252px;
  height: 46px;
  padding: 8px;
  background-color: var(--color-primary-main);
  ${theme.font.ko.subTitle2}
  cursor: pointer;
`;

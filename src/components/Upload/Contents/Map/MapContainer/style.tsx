import styled from 'styled-components';
import theme from '@styles/theme';

export const MapTitle = styled.div`
  margin-bottom: 10px;

  ${theme.font.ko.subTitle2};
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 48px;

  background-color: var(--color-gray2);

  display: flex;
  align-items: center;

  border: 0px;
  border-radius: 6px;

  margin-bottom: 12px;

  svg {
    width: 25px;
    height: 23.32px;
    margin: 8px;
  }
`;

export const PlaceInput = styled.input`
  margin-left: 8px;

  width: 100%;
  border: 0px;
  background-color: transparent;
  color: var(--color-gary8);

  ${theme.font.ko.subTitle1}
  font-weight:400;
`;

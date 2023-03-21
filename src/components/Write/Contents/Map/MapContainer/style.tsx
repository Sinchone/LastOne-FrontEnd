import styled from 'styled-components';
import theme from '@styles/theme';

export const MapTitle = styled.div`
  margin-bottom: 10px;

  ${theme.font.ko.subTitle2};
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 48px;

  background-color: #e5e5e7;

  display: flex;

  border: 0px;
  border-radius: 6px;

  margin-bottom: 12px;

  svg {
    margin: 8px;
  }
`;

export const PlaceInput = styled.input`
  margin-left: 8px;

  width: 100%;
  border: 0px;
  background-color: transparent;

  font-size: 20px;
`;

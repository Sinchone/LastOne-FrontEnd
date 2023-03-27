import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .arrow_icon {
    margin-right: 12px;
  }

  .location {
    ${theme.font.ko.subTitle1}
  }
  .checkbox_title {
    ${theme.font.ko.body1}
  }
`;

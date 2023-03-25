import theme from '@styles/theme';
import styled from 'styled-components';

export const AccodianContainer = styled.div`
  width: 100%;
  height: 538px;
`;

export const DateContainer = styled.div`
  width: 100%;
  height: 56px;
`;

export const TimeContainer = styled.div`
  width: 100%;
  height: 56px;
`;

export const AccodianNavContainer = styled.div`
  width: 100%;
  height: 32px;
  padding-bottom: 24px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-gray3);
`;

export const AccodianTitle = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-gray8);
  ${theme.font.ko.subTitle2}

  svg {
    margin-right: 16px;
  }
`;

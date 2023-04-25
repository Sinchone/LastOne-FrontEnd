import styled from 'styled-components';
import theme from '@styles/theme';

export const NavContainer = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--color-gray3);
`;

export const NavBackBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 24px 0px 24px 24px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const NavTitle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.font.ko.h3};
`;

import theme from '@styles/theme';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 10px 24px 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 100;

  ${theme.media.laptop} {
    height: 75px;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Nav = styled.li`
  font-weight: 500;
  font-size: 14px;
`;

export const UserNav = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  span {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 38px;
  border-radius: 6px;

  background-color: var(--color-primary-main);
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: var(--color-primary-light);
  }

  &:active {
    background-color: var(--color-primary-dark);
  }
`;

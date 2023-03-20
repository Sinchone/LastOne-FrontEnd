import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 16px 24px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 100000;
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
  width: 89px;
  height: 45px;
  border-radius: 6px;
  padding: 12px 14px 12px 14px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
`;

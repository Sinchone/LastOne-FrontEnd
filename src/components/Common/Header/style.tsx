import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 16px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
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
  gap: 17px;
  font-weight: 500;
  font-size: 14px;
`;

import styled from 'styled-components';
import theme from '@styles/theme';
import { MenuIcon } from '@assets/icon/list.svg';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 10px 24px 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray3);
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 100;
  user-select: none;
`;

export const Nickname = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
export const Gender = styled.span`
  font-size: 13px;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: #000c4a;
  color: #fefefe;
`;

export const LeftArrowIconWrapper = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

export const MenuIconWrapper = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

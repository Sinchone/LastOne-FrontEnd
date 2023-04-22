import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  max-width: 768px;
  width: 100%;
  height: 126px;
  padding: 24px 40px 24px 40px;
  filter: drop-shadow(0px -4px rgba(221, 221, 221, 0.25));
  background-color: var(--color-white);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const HomeNav = styled.li<{ isLocated: boolean }>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 15px;

  span {
    ${theme.font.ko.subTitle1}
    color: ${(props) =>
      props.isLocated ? `var(--color-primary-main)` : `var(--color-gray7)`}//var(--color-primary-main)
  }
`;

export const Nav = styled.li<{ isLocated: boolean }>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 15px;
  padding-top: 5px;

  span {
    ${theme.font.ko.subTitle1}
    color: ${(props) => (props.isLocated ? `var(--color-primary-main)` : `var(--color-gray7)`)}
  }
`;

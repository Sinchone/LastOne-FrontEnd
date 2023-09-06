import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const LogoContainer = styled.div`
  height: 55%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 10px;

  border: 0px;
  border-radius: 6px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 30px;
  letter-spacing: -2%;

  cursor: pointer;

  svg {
    margin-right: 4px;
    height: 1.5rem;
  }
`;

export const KakaoBtn = styled(Button)`
  background-color: var(--color-yellow);
  color: var(--color-black);
`;

export const HomeBtn = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-primary-main);
`;

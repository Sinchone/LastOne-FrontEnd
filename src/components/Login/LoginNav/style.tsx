import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  overflow: hidden;
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

  button {
    cursor: pointer;
  }
`;

export const KakaoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 62px;

  background-color: var(--color-yellow);

  border: 0px;
  border-radius: 6px;

  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -2%;

  svg {
    margin-right: 4px;
  }
`;

export const HomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 62px;

  background-color: var(--color-white);
  color: var(--color-primary-main);

  border: 0px;
  border-radius: 6px;

  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -2%;

  svg {
    margin-right: 4px;
  }
`;

import theme from '@styles/theme';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 155px;

  width: 474px;
  height: 473px;

  border-radius: 8px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  width: 230px;
  height: 168px;

  border-radius: 8px;

  background-color: var(--color-gray3);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

  background-color: var(--color-primary-main);
  color: var(--color-white);

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

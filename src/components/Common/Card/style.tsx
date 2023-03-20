import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 310px;
  gap: 15px;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 208px;
  background-color: var(--color-gray3);
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;

  .title {
    ${theme.font.ko.subTitle1}
  }
  span {
    ${theme.font.ko.body1}
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 7px;
`;
export const Recruit = styled.div`
  width: 53px;
  height: 28px;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  background-color: var(--color-secondary-main);
  color: var(--color-white);
  ${theme.font.ko.button}
`;

export const Gender = styled.div`
  width: 53px;
  height: 28px;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  background-color: var(--color-primary-main);
  color: var(--color-white);
  ${theme.font.ko.button}
`;

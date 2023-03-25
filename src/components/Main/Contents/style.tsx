import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 126px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  ${theme.font.ko.subTitle1}
`;

export const PromiseContents = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 114px;
  border-radius: 8px;
  padding: 24px 16px 24px 16px;
  background-color: var(--color-white);
  filter: drop-shadow(0px 0px 10px rgba(111, 120, 130, 0.15));
  margin-bottom: 42px;
`;

export const PromiseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  gap: 16px;

  span {
    ${theme.font.ko.subTitle1}
  }

  .description {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -1%;
    color: var(--color-gray8);
  }
`;

export const Contour = styled.div`
  width: 0px;
  height: 66px;
  background-color: var(--color-gray3);
  border: 1px solid var(--color-gray3);
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

import styled, { css } from 'styled-components';

const text = {
  normal: css`
    font-weight: 400;
    letter-spacing: -1%;
    user-select: none;
  `,
  bold: css`
    font-weight: bold;
    letter-spacing: -2%;
    user-select: none;
  `,
};

export const Wrapper = styled.section<{ isCanceled: boolean; isRead: boolean }>`
  width: 100%;
  border-left: 4px solid var(${(props) => (props.isCanceled ? '--color-error' : '--color-primary-main')});
  display: grid;
  grid-template-columns: 128px 1fr 50px;

  ${(props) => props.isRead && `filter: contrast(0%) brightness(1.5);`}
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 24px;
`;

export const Main = styled.div<{ isCanceled: boolean }>`
  width: 100%;
  padding: 4px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    ${text.bold};
    font-size: 18px;
    color: var(${(props) => (props.isCanceled ? '--color-error' : '--color-primary-main')});
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p:nth-child(1) {
    ${text.normal};
    font-size: 16px;
    color: var(--color-primary-main);
  }
  p:nth-child(2) {
    ${text.normal};
    font-size: 14px;
    color: var(--color-gray8);
  }
`;

export const Side = styled.div`
  padding: 4px 0;

  p {
    ${text.normal};
    font-size: 14px;
    text-align: right;
    color: var(--color-gray8);
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

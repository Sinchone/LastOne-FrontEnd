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

const colors: { [key: string]: string } = {
  REQUEST: '--color-primary-main',
  CANCEL: '--color-error',
  SUCCESS: '--color-secondary-main',
};

export const Wrapper = styled.section<{ type: string; isRead: boolean }>`
  width: 100%;
  border-left: 4px solid var(${(props) => colors[props.type]});
  display: grid;
  grid-template-columns: 128px 1fr 50px;
  cursor: pointer;

  ${(props) => props.isRead && `filter: contrast(0%) brightness(1.5);`}
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 24px;
`;

export const Main = styled.div<{ type: string }>`
  width: 100%;
  padding: 4px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    ${text.bold};
    font-size: 18px;
    color: var(${(props) => colors[props.type]});
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

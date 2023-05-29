import { css } from 'styled-components';

export const customOverlayStyle = css`
  .custom-overlay {
    height: 66px;
    padding: 0 16px;
    background-color: var(--color-primary-main);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .title {
    color: var(--color-secondary-main);
    font-size: 16px;
    font-weight: 700;
  }

  .address {
    color: var(--color-white);
    font-size: 12px;
    font-weight: 400;
  }
`;

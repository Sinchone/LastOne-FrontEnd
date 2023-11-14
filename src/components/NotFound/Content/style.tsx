import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  svg {
    filter: grayscale(1);
  }

  p {
    font-size: 20px;
    color: var(--color-gray8);
  }
`;

export const HomeBtn = styled.button`
  color: var(--color-gray8);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  margin: 20px;

  border: 1px solid var(--color-gray8);
  border-radius: 6px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -2%;

  cursor: pointer;
  transition: ease all 0.3s;

  svg {
    margin-right: 4px;
    height: 1.5rem;

    path {
      fill: var(--color-gray8);
    }
  }

  &:hover {
    background-color: var(--color-gray3);
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  color: var(--color-gray8);
`;

export const Subject = styled.span`
  font-weight: 700;
`;

export const TimesWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const disabled = `
  cursor: default;
  background-color: var(--color-gray2);
  color: var(--color-gray5);
`;

const selected = `
  background-color: var(--color-primary-main);
  color: var(--color-white);
`;

const normal = `
  background-color: var(--color-white);
  color: var(--color-gray8);
`;

export const Time = styled.div<{ isSelected: boolean; isDisabled: boolean }>`
  width: 12%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  user-select: none;
  background-color: var(--color-white);
  color: var(--color-gray8);

  ${(props) => (props.isSelected ? selected : normal)}
  ${(props) => props.isDisabled && disabled}
`;

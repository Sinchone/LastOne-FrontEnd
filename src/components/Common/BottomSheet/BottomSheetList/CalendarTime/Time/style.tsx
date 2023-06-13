import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  color: var(--color-gray8);
`;

export const Subject = styled.span`
  font-weight: 700;
`;

export const TimesWrapper = styled.div`
  width: 590px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const getBackgroundColor = (isSelected: boolean, isCurrent: boolean): string => {
  if (isSelected) {
    return 'var(--color-primary-main)';
  }
  if (isCurrent) {
    return 'var(--color-primary-light)';
  }
  return 'var(--color-white)';
};

const getTextColor = (isSelected: boolean, isCurrent: boolean): string =>
  isSelected || isCurrent ? 'var(--color-white)' : 'var(--color-gray8)';
// isSelected 와 isCurrent 중 하나라도 true 일 때 'var(--color-white)'
// 둘 다 false 일 때 'var(--color-gray8)'

export const Time = styled.div<{ isSelected: boolean; isCurrent: boolean }>`
  width: 80px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  background-color: ${(props) => getBackgroundColor(props.isSelected, props.isCurrent)};
  color: ${(props) => getTextColor(props.isSelected, props.isCurrent)};
`;

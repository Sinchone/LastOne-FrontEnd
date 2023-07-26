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

export const Time = styled.div<{ isSelected: boolean }>`
  width: 12%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  background-color: ${(props) => (props.isSelected ? 'var(--color-primary-main)' : 'var(--color-white)')};
  color: ${(props) => (props.isSelected ? 'var(--color-white)' : 'var(--color-gray8)')};
`;

import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ApplyPostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .title {
    ${theme.font.ko.subTitle1}
    color: var(--color-gray9);
  }

  .date {
    ${theme.font.ko.body1}
    color: var(--color-gray8);
    margin-top: 2px;
  }

  .location {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1.9%;
    gap: 5px;
    margin-top: 2px;
    color: var(--color-gray9);
  }
`;

export const Status = styled.span<{ status: string }>`
  margin: 0;
  padding: 6px 10px;
  border-radius: 6px;

  font-weight: 700;
  font-size: 14px;
  color: var(--color-white);

  background-color: var(${(props) => (props.status === 'waiting' ? '--color-gray5' : '--color-primary-main')});
`;

export const MovePost = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;

  ${theme.font.ko.body1};
  cursor: pointer;

  color: var(--color-primary-main);
`;

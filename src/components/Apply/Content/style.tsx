import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100vh;
  padding: 20px 20px;
`;

export const MenuTab = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Tab = styled.li`
  padding: 12px;
  border-bottom: solid var(--color-primary-main);

  span {
    ${theme.font.ko.subTitle2}
    color: var(--color-primary-main);
  }
`;

export const SecondTab = styled.li`
  padding: 12px;

  span {
    ${theme.font.ko.subTitle2}
    color: var(--color-gray5);
  }
`;

export const ApplyPostList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 50px;
`;

export const ApplyPost = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 21px;
`;

export const ApplyPostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

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

export const MovePost = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;

  ${theme.font.ko.body1};

  color: var(--color-primary-main);
`;

export const ApplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ApplyItem = styled.li`
  width: 100%;
  background-color: var(--color-white);
  padding: 16px 24px;

  display: flex;
  align-items: center;
  gap: 20px;

  box-shadow: 0px 0px 7px rgba(102, 109, 117, 0.1);
  border-radius: 8px;

  .time {
    ${theme.font.ko.body1}
    color: var(--color-gray8);
    flex: 1;
  }
`;

export const ApplyProfile = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    width: 64px;
    height: 64px;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.2%;
    color: var(--color-gray9);
    margin-top: 3px;
  }
`;

export const Contour = styled.div`
  width: 0px;
  height: 30px;
  color: var(--color-gray5);
  border: 1px solid var(--color-gray5);
`;

export const Gender = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--color-white);
  background-color: var(--color-primary-main);
  padding: 6px 8px 6px 8px;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;
export const ApplyButton = styled.div`
  border-radius: 6px;
  padding: 10px 20px;
  background-color: var(--color-primary-main);
  ${theme.font.ko.body1}
  color: var(--color-white);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ChattingButton = styled.div`
  border-radius: 6px;
  padding: 10px 20px 10px 20px;
  background-color: var(--color-white);
  ${theme.font.ko.body1}
  color: var(--color-primary-main);
  border: 0.3px solid var(--color-primary-main);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

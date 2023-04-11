import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ChattingMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 15px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NameAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .name {
    ${theme.font.ko.subTitle2}
  }

  .message {
    ${theme.font.ko.body1}
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 20px;
`;

export const TimeAndMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  span {
    ${theme.font.ko.body2}
  }
`;
export const NotRead = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--color-error);
  color: var(--color-white);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3px;
`;

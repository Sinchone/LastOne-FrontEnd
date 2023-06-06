import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100% - 60px);
  padding: 0 24px;
  position: relative;
`;

export const Option = styled.div`
  width: 100%;
  padding: 24px 0;
  background: var(--color-gray1);

  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 60px;
  z-index: 2;

  color: var(--color-gray8);

  & > div {
    display: flex;
    gap: 27px;

    p {
      user-select: none;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    color: var(--color-gray7);
    user-select: none;
    cursor: pointer;
  }

  ${theme.media.laptop} {
    top: 75px;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 7px;
`;

export const NotificationContainer = styled.div`
  height: calc(100vh - 145px);
  padding: 24px 0;

  display: flex;
  flex-direction: column;
  gap: 56px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${theme.media.laptop} {
    overflow: scroll;
  }
`;

export const Empty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 20px;
  color: var(--color-gray5);
  user-select: none;

  &::after {
    content: '최근 알림이 없습니다.';
  }
`;

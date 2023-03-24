import styled from 'styled-components';
import theme from '@styles/theme';

export const WriteContainer = styled.div`
  padding: 40px 24px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 64px;

  background-color: transparent;

  border: 0px;
  border-bottom: 1px solid var(--color-gray5);

  ${theme.font.ko.h3}

  color: var(--color-gary8);

  ::placeholder {
    color: var(--color-gray5);
  }
`;

export const TimeContainer = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  gap: 24px;
  margin-bottom: 40px;

  ${theme.font.ko.subTitle2}
  color: var(--color-gray8);

  border: 1px solid var(--color-gray5);
  border-radius: 8px;
`;

export const DateWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 32px;
    height: 32px;
    margin: 8px;
  }
`;

export const TimeWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 32px;
    height: 32px;
    margin: 8px;
  }
`;

export const UploadBtn = styled.button`
  width: 100%;
  height: 56px;

  background-color: var(--color-primary-main);

  color: var(--color-white);
  ${theme.font.ko.subTitle2}

  border: 0px;
  border-radius: 6px;
`;

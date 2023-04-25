import styled from 'styled-components';
import theme from '@styles/theme';

export const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;

  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImgTitle = styled.div`
  ${theme.font.ko.subTitle2}
`;

export const AddImgContainer = styled.div`
  width: 100%;
  height: 212px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const AddImg = styled.div`
  width: 229px;
  height: 212px;
  border-radius: 8px;

  background-color: var(--color-gray3);
`;

export const AddMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  opacity: 0.1;
`;

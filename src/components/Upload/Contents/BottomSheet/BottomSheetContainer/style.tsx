import theme from '@styles/theme';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 56px 24px 40px 24px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  transition: height 6s;
  bottom: 0;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CancelBtn = styled.button`
  width: 352px;
  height: 100%;

  border: 0px;
  border-radius: 6px;
  background-color: var(--color-gray3);

  ${theme.font.ko.subTitle2}
`;

export const ApplyBtn = styled.button`
  width: 352px;
  height: 100%;

  border: 0px;
  border-radius: 6px;
  background-color: var(--color-primary-main);

  ${theme.font.ko.subTitle2}
  color:var(--color-white);
`;

import theme from '@styles/theme';
import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
  z-index: 101;
`;

export const OutsideArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 225px); // 여기서 바텀시트의 높이를 정확한 값으로 설정하세요.
  z-index: 102;
`;

export const Wrapper = styled.div`
  z-index: 102;
  position: fixed;
  width: 100%;
  max-width: 620px;
  height: fit-content;
  &::-webkit-scrollbar {
    display: none;
  }
  bottom: 0;
  border-radius: 8px 8px 0 0;
  background-color: var(--color-gray1);
  animation: ${SlideUp} 0.5s;

  .icon {
    position: absolute;
    top: 10px;
    left: 45%;
  }

  ${theme.media.tablet} {
    max-width: 768px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${theme.media.mobile2} {
    max-width: 620px;
  }
`;


export const BottomSheetContent = styled.div`
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BottomSheetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-gray3);
  padding-bottom: 15px;
  font-weight: bold;
`; 

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;

  button {
    flex: 1;
  }
`;

export const ExitButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: var(--color-white);
    border: 1px solid var(--color-gray3);
    font-weight: bold;
    cursor: pointer;
`;





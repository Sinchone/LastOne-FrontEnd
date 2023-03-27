import theme from '@styles/theme';
import styled from 'styled-components';

export const BottomSheetContent = styled.div`
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
`;

export const BottomSheetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-gray3);
  padding-bottom: 15px;

  .select_pitness {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2.2%;
  }

  .register_pitness {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 35px 0px;
  width: 100%;
  gap: 13px;
  margin-bottom: 20px;
`;

export const ContentBox = styled.div`
  width: 236px;
  height: 154px;
  border-radius: 8px;
  padding: 8px;
  background-color: var(--color-white);
  filter: drop-shadow(0px 0px rgba(61, 64, 72, 0.1));
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: var(--color-gray8);
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -2%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 25px;
`;

export const CancelButton = styled.button`
  color: #001b36;
  width: 352px;
  height: 56px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  ${theme.font.ko.subTitle2}
`;

export const Button = styled.button`
  color: var(--color-white);
  border-radius: 6px;
  width: 352px;
  height: 56px;
  padding: 8px;
  background-color: var(--color-primary-main);
  ${theme.font.ko.subTitle2}
`;

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

  .select_fitness {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -2.2%;
  }

  .register_fitness {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    font-size: 16px;
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
  margin-bottom: 13px;
`;

export const ContentBox = styled.div<{ isSelected: boolean }>`
  width: 180px;
  height: 110px;
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) => (props.isSelected ? 'var(--color-primary-main)' : 'var(--color-white)')};
  filter: drop-shadow(0px 0px rgba(61, 64, 72, 0.1));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    color: ${(props) => (props.isSelected ? 'var(--color-white)' : 'var(--color-gray8)')};
    font-weight: 500;
    font-size: 16px;
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
  width: 252px;
  height: 46px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  ${theme.font.ko.subTitle2}

  cursor: pointer;
`;

export const Button = styled.button`
  color: var(--color-white);
  border-radius: 6px;
  width: 252px;
  height: 46px;
  padding: 8px;
  background-color: var(--color-primary-main);
  ${theme.font.ko.subTitle2}
  cursor: pointer;
`;

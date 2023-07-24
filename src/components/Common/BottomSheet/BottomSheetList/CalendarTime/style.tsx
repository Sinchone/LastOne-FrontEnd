import theme from '@styles/theme';
import styled from 'styled-components';

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
  margin-bottom: 12px;
  cursor: pointer;

  .select_fitness {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -2.2%;
    display: flex;
    align-items: center;
    gap: 15px;
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
  width: 100%;
  gap: 13px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
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
  margin-top: 22px;
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

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Pretendard';
  justify-content: center;

  .react-calendar {
    width: 100%;
    border: none;
    padding-bottom: 10px;
    .react-calendar__navigation {
      width: 200px;
      margin: 0 auto;
      margin-bottom: 25px;
      align-items: center;
      &:hover {
        background-color: var(--color-white);
      }
      button {
        background-color: var(--color-white);
      }
    }

    .react-calendar__navigation__prev2-button {
      display: none;
    }
    .react-calendar__navigation__next2-button {
      display: none;
    }
    .react-calendar__navigation__label {
      &:hover {
        background-color: var(--color-white);
      }
    }

    .react-calendar__navigation__next-button,
    .react-calendar__navigation__prev-button {
      font-size: 25px;
      padding-bottom: 4px;
    }

    .react-calendar__navigation__label > span {
      font-size: 16px;
      font-weight: bold;
      color: #000000;
      font-family: 'Pretendard';
    }

    .react-calendar__month-view {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .react-calendar__month-view__weekdays {
      margin-bottom: 6px;
      justify-content: space-around;
      font-size: 16px;
      font-family: 'Pretendard';
      font-weight: 400;
      min-width: 497px;
    }

    .react-calendar__month-view__days {
      button:nth-of-type(7n) {
        color: blue;
      }
      .react-calendar__tile--active {
        color: white !important;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575 !important;
      }
    }

    .react-calendar__month-view__days {
      min-width: 467px;
      max-width: 497px;
      height: 100%;

      display: flex;
      gap: 12px 31px;
      justify-content: center;
    }

    .react-calendar__month-view__days .react-calendar__tile {
      height: 40px;
      max-width: 40px;
    }

    .react-calendar__tile {
      max-width: 100%;
      font-size: 16px;
      text-align: center;
      border-radius: 8px;
    }

    .react-calendar__tile--active {
      background: #001b36 !important;
    }
    .react-calendar__tile:enabled:focus {
      background-color: white;
    }
  }
`;

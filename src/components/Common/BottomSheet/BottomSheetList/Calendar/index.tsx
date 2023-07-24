import React, { useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@recoil/bottomsheet/calendarTime';

const Calendar = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [changeState, setChangeState] = useState(false);
  const router = useRouter();

  const handleDateChange = (date: Date) => {
    const formattedSelectedDate = moment(selectedDate).format('YYYY.MM.DD');
    const formattedDate = moment(date).format('YYYY.MM.DD');
    setChangeState(true);
    setCurrentDate(date);
    setSelectedDate(date);
    if (formattedSelectedDate === formattedDate) {
      setSelectedDate(null);
    }
  };

  const handleApply = () => {
    const { date, ...data } = router.query;
    const formattedCurrentDate = moment(currentDate).format('YYYY.MM.DD');

    if (currentDate === null || formattedCurrentDate === date) {
      if (changeState) {
        setSelectedDate(null);
        router.push({
          pathname: MATCHING_PAGE,
          query: { ...data },
        });
      }
    } else {
      const newDate = formattedCurrentDate;
      router.push({
        pathname: MATCHING_PAGE,
        query: { ...data, date: newDate },
      });
      setSelectedDate(currentDate);
    }
    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader>
        <span className="select_fitness">
          <CalendarIcon />
          운동날짜
        </span>
        <BottomArrowIcon />
      </S.BottomSheetHeader>
      <S.Content>
        <S.CalendarWrapper>
          <ReactCalendar
            onChange={handleDateChange as any}
            value={selectedDate}
            calendarType={'gregory'}
            formatMonthYear={(locale, date) => moment(date).format('YYYY.MM')}
            formatDay={(locale, date) => moment(date).format('D')}
          />
        </S.CalendarWrapper>
      </S.Content>
      <S.ButtonGroup>
        <S.CancelButton onClick={closeBottomSheet}>취소</S.CancelButton>
        <S.Button onClick={handleApply}>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default Calendar;

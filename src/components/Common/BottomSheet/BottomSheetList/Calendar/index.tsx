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

const Calendar = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const router = useRouter();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleApply = () => {
    router.push({
      pathname: MATCHING_PAGE,
      query: { ...router.query, date: moment(selectedDate).format('YYYY.MM.DD') },
    });
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
            value={selectedDate ? selectedDate : new Date()}
            calendarType={'US'}
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

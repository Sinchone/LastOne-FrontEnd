import React, { useState } from 'react';
import * as S from './style';
import CalendarIcon from '@assets/icon/calendar.svg';
import ClockIcon from '@assets/icon/clock.svg';
import BottomArrowIcon from '@assets/icon/bottom-arrow.svg';
import TopArrowIcon from '@assets/icon/top-arrow.svg';
import { useBottomSheet } from '@hooks/common';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from './Time';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { selectedDateState, selectedTimeState } from '@recoil/bottomsheet/calendarTime';
import { TimeType } from '@typing/post';

const CalendarTime = () => {
  const { closeBottomSheet } = useBottomSheet();

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState);
  const [currentDate, setCurrentDate] = useState<Date | null>(selectedDate);
  const [currentTime, setCurrentTime] = useState<TimeType>(selectedTime);
  const [selectMenu, setSelectMenu] = useState('calendar');

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setCurrentDate(date);
  };

  const handleTimeChange = ({ meridiem, time }: TimeType) => {
    setCurrentTime({ meridiem, time });
  };

  const handleApply = () => {
    setSelectedDate(currentDate);
    setSelectedTime(currentTime);

    closeBottomSheet();
  };

  return (
    <S.BottomSheetContent>
      <S.BottomSheetHeader onClick={() => setSelectMenu('calendar')}>
        <span className="select_fitness">
          <CalendarIcon />
          운동 날짜 선택
        </span>
        {selectMenu === 'calendar' ? <TopArrowIcon /> : <BottomArrowIcon />}
      </S.BottomSheetHeader>
      {selectMenu === 'calendar' && (
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
      )}
      <S.BottomSheetHeader onClick={() => setSelectMenu('time')}>
        <span className="select_fitness">
          <ClockIcon />
          운동 시간 선택
        </span>
        {selectMenu === 'time' ? <TopArrowIcon /> : <BottomArrowIcon />}
      </S.BottomSheetHeader>
      {selectMenu === 'time' && (
        <S.Content>
          <Time onChange={handleTimeChange} currentTime={currentTime} />
        </S.Content>
      )}
      <S.ButtonGroup>
        <S.CancelButton onClick={closeBottomSheet}>취소</S.CancelButton>
        <S.Button onClick={handleApply}>적용</S.Button>
      </S.ButtonGroup>
    </S.BottomSheetContent>
  );
};

export default CalendarTime;

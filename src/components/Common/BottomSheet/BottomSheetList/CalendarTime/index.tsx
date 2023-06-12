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

type ValuePiece = Date | null;

const CalendarTime = () => {
  const { closeBottomSheet } = useBottomSheet();
  const [selectedDate, setSelectedDate] = useState<ValuePiece>(new Date());

  const [selectMenu, setSelectMenu] = useState('calendar');
  const [selectAMTime, setSelectAMTime] = useState('');
  const [selectPMTime, setSelectPMTime] = useState('');

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string, isAM: boolean) => {
    if (isAM) {
      setSelectAMTime(time);
      setSelectPMTime('');
    } else {
      setSelectPMTime(time);
      setSelectAMTime('');
    }
  };

  const handleApply = () => {
    const formattedDate = moment(selectedDate).format('MM/DD');
    const timeToUse = selectAMTime !== '' ? `오전 ${selectAMTime}` : `오후 ${selectPMTime}`;
    console.log('선택 날짜', formattedDate);
    console.log('선택 시간', timeToUse);
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
              calendarType={'US'}
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
          <Time onChange={handleTimeChange} amTime={selectAMTime} pmTime={selectPMTime} />
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

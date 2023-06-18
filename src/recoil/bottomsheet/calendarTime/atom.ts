import { TimeType } from '@typing/post';
import { atom } from 'recoil';

export const selectedDateState = atom<Date>({
  key: 'selectedDateState',
  default: undefined,
});

export const selectedTimeState = atom<TimeType>({
  key: 'selectedTimeState',
  default: {
    meridiem: '',
    time: '',
  },
});

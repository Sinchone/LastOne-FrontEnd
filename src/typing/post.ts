import { times } from '@constants/post';
import { GymInfoType } from './user';

export interface Post {
  title: string;
  description: string;
  workoutPart: string;
  preferGender: string;
  gym: GymInfoType;
  startedAt: StartedAtDate;
}

export interface TimeType {
  meridiem: '' | '오전' | '오후';
  time: '' | (typeof times)[number];
}

export interface StartedAtDate extends TimeType {
  date: string;
}

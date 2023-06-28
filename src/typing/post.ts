import { exercisePartArray, times } from '@constants/post';
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

export interface MainPost {
  id?: number;
  status: '모집중' | '모집완료' | '기간만료';
  preferGender: '남성만' | '여성만' | '성별무관';
  workoutPart: typeof exercisePartArray;
  title: string;
  gym: string;
  startedAt: string;
  imgUrl: string;
}

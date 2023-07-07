import { GymInfoType, FitnessType } from './user';
import { exercisePartArray, times } from '@constants/post';

export interface Post {
  id?: number;
  title: string;
  description: string;
  workoutPurpose?: string;
  preferGender: string;
  gym: GymInfoType;
  workoutPart: string;
  startedAt: StartedAtDate;
  status?: string;
  imgUrl?: string;
}

export interface PostDetailType {
  memberId: number;
  nickname: string;
  gender: string;
  profileUrl: string;
  workoutPurpose: string;
  sbd: FitnessType;
  gym: GymInfoType;

  recruitmentId: number;
  title: string;
  description: string;
  preferGender: string;
  imgUrls: string[];
  startedAt: string;
  createdAt: string;
}
export interface TimeType {
  meridiem: '' | '오전' | '오후';
  time: '' | (typeof times)[number];
}

export interface StartedAtDate extends TimeType {
  date: string;
}

export interface CreatedAtDate extends TimeType {
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

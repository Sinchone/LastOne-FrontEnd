import { times } from '@constants/post';
import { GymInfoType, FitnessType } from './user';

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
  startedAt: StartedAtDate;
  createdAt: CreatedAtDate;
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

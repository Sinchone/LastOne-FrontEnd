import { StartedAtDate } from './post';

export interface Application {
  applicationId: number;
  recruitmentId: number;
  title: string;
  gym: string;
  startedAt: StartedAtDate;
  memberId: number;
  profileUrl: string;
  nickname: string;
  gender: string;
  status: string;
  applicationDate: string;
}

export interface RequestedApplication {
  applicationId: number;
  recruitmentId: number;
  title: string;
  gym: string;
  startedAt: string;
  memberId: number;
  profileUrl: string;
  nickname: string;
  gender: string;
  status: 'WAITING' | 'CANCEL' | 'FAILURE' | 'SUCCESS';
  applicationDate: string;
}

export interface ReceivedApplication {
  applicationId: number;
  applicantId: number;
  nickname: string;
  profileUrl: string;
  gender: string;
  status: 'WAITING' | 'CANCEL' | 'FAILURE' | 'SUCCESS';
  applicationDate: string;
}

export interface ReceivedApplications {
  id: number;
  title: string;
  startedAt: string;
  gym: string;
  applications: ReceivedApplication[];
}

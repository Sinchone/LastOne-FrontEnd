export interface ProfileType {
  email: string;
  gender: string;
  id: number;
  isEdited: boolean;
  nickname: string;
  profileUrl: string;
  workoutDay: string[];
  workoutPurpose: string;
  workoutTime: string;
}

export interface GymInfoType {
  name: string;
  location: string;
  latitude: string;
  longitude: string;
}

export interface FitnessType {
  deadLift: number;
  benchPress: number;
  squat: number;
}

export interface MyPageField {
  gyms: GymInfoType[];
  member: ProfileType;
  sbd: FitnessType;
}

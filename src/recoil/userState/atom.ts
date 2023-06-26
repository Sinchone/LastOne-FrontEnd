import { atom } from 'recoil';

interface UserStateType {
  id: number | undefined;
  isEdited: boolean;
}

export const currentUserState = atom<UserStateType>({
  key: 'currentUserState',
  default: {
    id: undefined,
    isEdited: false,
  },
});

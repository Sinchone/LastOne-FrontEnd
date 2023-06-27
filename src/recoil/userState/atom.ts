import { atom } from 'recoil';

interface UserType {
  id: number | undefined;
  isEdited: boolean;
}

let userId, userIsEdited;

if (typeof window !== 'undefined') {
  userId = localStorage.getItem('userId');
  userIsEdited = localStorage.getItem('userIsEdited');
}

export const currentUserState = atom<UserType>({
  key: 'currentUserState',
  default: {
    id: Number(userId),
    isEdited: Boolean(userIsEdited),
  },
});

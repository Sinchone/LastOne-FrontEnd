import { getMyProfile } from '@apis/user';
import { selector } from 'recoil';

export const currentUserState = selector({
  key: 'currentUserState',
  get: async () => {
    const { data: user } = await getMyProfile();

    return {
      id: user.member.id,
      isEdited: user.member.isEdited,
    };
  },
});

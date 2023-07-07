import { atom } from 'recoil';

export const currentMenuState = atom<'received' | 'requested'>({
  key: 'currentMenu',
  default: 'received',
});

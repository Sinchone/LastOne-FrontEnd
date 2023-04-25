import { atom } from 'recoil';
import { BottomSheetName } from '@typing/bottomSheet';

interface BottomSheetType {
  isOpen: boolean;
  name: BottomSheetName | '';
}
export const bottomSheetState = atom<BottomSheetType>({
  key: 'bottomsheet',
  default: {
    isOpen: false,
    name: '',
  },
});

import { atom } from 'recoil';
import { BottomSheetName } from '@typing/bottomSheet';

interface MatchingFilterType {
  fitnessClub: string;
  exerciseArea: string;
  gender: string;
}
export const matchingFilterState = atom<MatchingFilterType>({
  key: 'bottomsheet',
  default: {
    fitnessClub: '전체',
    exerciseArea: '',
    gender: '',
  },
});

import React from 'react';
import { useRecoilState } from 'recoil';
import { bottomSheetState } from '@recoil/bottomsheet';
import { BottomSheetName } from '@typing/bottomSheet';

const useBottomSheet = () => {
  const [bottomsheet, setBottomSheet] = useRecoilState(bottomSheetState);

  const showBottomSheet = (name: BottomSheetName, initialMenu?: 'calendar' | 'time') => {
    setBottomSheet({
      isOpen: true,
      name,
      initialMenu,
    });
  };

  const closeBottomSheet = () => {
    setBottomSheet({
      ...bottomsheet,
      isOpen: false,
    });
  };

  return { bottomsheet, showBottomSheet, closeBottomSheet };
};

export default useBottomSheet;

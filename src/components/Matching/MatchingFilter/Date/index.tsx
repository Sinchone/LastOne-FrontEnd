import React from 'react';
import FilterContainer from '@components/Matching/MatchingFilter/FilterContainer';
import BottomArrowIcon from '@assets/icon/bottom-arrow-small.svg';
import BottomArrowWhiteIcon from '@assets/icon/bottom-arrow-white.svg';
import { useRouter } from 'next/router';
import { useBottomSheet } from '@hooks/common';
import moment from 'moment';

const Date = () => {
  const router = useRouter();
  const { showBottomSheet } = useBottomSheet();
  const date = router.query.date as string | undefined;

  return (
    <FilterContainer isSelected={date !== undefined}>
      <span onClick={() => showBottomSheet('Calendar')}>
        {date ? moment(date).format('MM/DD') : '날짜설정'}
        {date ? <BottomArrowWhiteIcon /> : <BottomArrowIcon />}
      </span>
    </FilterContainer>
  );
};

export default Date;

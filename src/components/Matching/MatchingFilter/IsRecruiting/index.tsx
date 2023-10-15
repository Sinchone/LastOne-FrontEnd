import React, { useEffect, useState } from 'react';
import * as S from './style';
import Checked from '@assets/icon/checkbox.svg';
import { useRouter } from 'next/router';
import { MATCHING_PAGE } from '@constants/route';

const IsRecruiting = () => {
  const router = useRouter();
  const isRecruiting = router.query.isRecruiting as string | undefined;
  const [isChecked, setIsChecked] = useState<boolean>(isRecruiting === 'true');

  const handleToggleCheckbox = () => {
    router.push({
      pathname: MATCHING_PAGE,
      query: { ...router.query, isRecruiting: !isChecked },
    });
  };

  useEffect(() => {
    if (isRecruiting) setIsChecked(isRecruiting === 'true');
  }, [isRecruiting]);

  return (
    <S.CheckBoxWrapper onClick={handleToggleCheckbox}>
      {isChecked ? <Checked /> : <S.UnChecked />}
      <span className="checkbox_title">모집중만 보기</span>
    </S.CheckBoxWrapper>
  );
};

export default IsRecruiting;

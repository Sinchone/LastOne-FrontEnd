import React, { useState } from 'react';
import CheckBoxIcon from '@assets/icon/checkbox.svg';
import * as S from './style';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return <S.Wrapper onClick={handleToggleCheckbox}>{isChecked ? <CheckBoxIcon /> : <S.Checkbox />}</S.Wrapper>;
};

export default CheckBox;

import { useState, useEffect, ReactNode } from 'react';
import * as S from './style';
import Check from '@assets/icon/check-blue.svg';

interface Props {
  children: ReactNode;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({ children, setToast }: Props) => {
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    const appear = setTimeout(() => {
      setToast(false);
    }, 2400);

    const disappear = setTimeout(() => {
      setUnmount(true);
    }, 2000);

    return () => {
      clearTimeout(appear);
      clearTimeout(disappear);
    };
  }, [setToast]);

  return (
    <S.Wrapper unmount={unmount}>
      <Check />
      <p>{children}</p>
    </S.Wrapper>
  );
};

export default Toast;

import { useRef, useEffect, ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Tooltip = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        return;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Wrapper>
      <div className="rect" />
      <div className="option" ref={ref}>
        {children}
      </div>
    </S.Wrapper>
  );
};

export default Tooltip;

import React, { useRef, useState } from 'react';
import * as S from './style';
import { SlideItemList } from '../Slide';

const Banner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const onMouseDown = (e: any) => {
    setIsDrag(true);
    setStartX(e.pageX);
  };

  const onMouseUp = () => {
    setIsDrag(false);
  };

  const onMouseMove = (e: any) => {
    if (isDrag && scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const dragDistance = startX - e.pageX;

      if (clientWidth !== 768) {
        scrollRef.current.scrollLeft = scrollLeft + dragDistance;
        setStartX(e.pageX);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.BannerSlide ref={scrollRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
        <SlideItemList />
      </S.BannerSlide>
    </S.Wrapper>
  );
};

export default Banner;

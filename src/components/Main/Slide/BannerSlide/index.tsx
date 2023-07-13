import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import * as S from './style';
import SlideItem from '../SlideItem';
import { MY_PAGE, MATCHING_PAGE } from '@constants/route';

const Slide = () => {
  const cards = [
    { order: 1, label: '내 주변 헬스장 등록하기', destination: MY_PAGE },
    { order: 2, label: '같이 운동해요 파트너 찾기', destination: MATCHING_PAGE },
    { order: 3, label: '파트너와 함께 라스트 원!', destination: MATCHING_PAGE },
  ];

  return (
    <S.Wrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
      >
        {[...cards, ...cards].map((card, idx) => (
          <SwiperSlide key={idx}>
            <SlideItem order={card.order} label={card.label} destination={card.destination} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};

export default Slide;

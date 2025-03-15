import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { VerseDetailDataList } from '@features/drilling/components/cardDisplay/card/type.ts';
import Card from '@features/drilling/components/cardDisplay/card';
import { getShortVerseAddress } from '@utils/common.ts';
import ToStartSlideButton from '@features/drilling/components/cardDisplay/cardSwiper/ToStartSlideButton.tsx';
import ToEndSlideButton from '@features/drilling/components/cardDisplay/cardSwiper/ToEndSlideButton.tsx';
import ToPrevSlideButton from '@features/drilling/components/cardDisplay/cardSwiper/ToPrevSlideButton.tsx';
import ToNextSlideButton from '@features/drilling/components/cardDisplay/cardSwiper/ToNextSlideButton.tsx';

type CardSwiperProps = {
  data: VerseDetailDataList;
};

function CardSwiper({ data }: CardSwiperProps) {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}>${getShortVerseAddress(data[index])}</span>`;
    },
  };

  const navigation = {
    prevEl: '.to-prev-slide',
    nextEl: '.to-next-slide',
  };

  return (
    <>
      <ToPrevSlideButton />
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        navigation={navigation}
      >
        <div
          slot='container-end'
          className='absolute bottom-[150px] flex w-full items-center justify-between text-lg font-bold text-secondary mobile:text-base'
        >
          <ToStartSlideButton />
          <ToEndSlideButton slideIndex={data.length - 1} />
        </div>
        {data.map(v => (
          <SwiperSlide key={`card-${v.idx}`}>
            <Card data={v} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ToNextSlideButton />
    </>
  );
}

export default CardSwiper;

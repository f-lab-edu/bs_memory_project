import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { VerseDetailDataList } from '@features/drilling/components/verseDisplay/verseCard/type';
import VerseCard from 'src/features/drilling/components/verseDisplay/verseCard';
import { getShortVerseAddress } from '@utils/common';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';
import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
import { useRef, useState } from 'react';
import cn from '@utils/cn';
import { ClassValue } from 'clsx';

type CardSwiperProps = {
  data: VerseDetailDataList;
};

const startEndNavClass = (disabled: boolean, ...inputs: ClassValue[]) => {
  return cn(
    'flex items-center justify-center space-x-1',
    inputs,
    disabled && 'text-gray-500',
  );
};

const prevNextNavClass = (disabled: boolean, ...inputs: ClassValue[]) => {
  return cn('absolute z-20', inputs, disabled && 'text-gray-500');
};

function CardSwiper({ data }: CardSwiperProps) {
  const swiperRef = useRef<SwiperCore>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const START_INDEX = 0;
  const END_INDEX = data.length - 1;
  const isStart = activeIndex === START_INDEX;
  const isEnd = activeIndex === END_INDEX;

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
      <button
        disabled={isStart}
        className={prevNextNavClass(
          isStart,
          'to-prev-slide left-[-10%] top-[30%]',
        )}
      >
        <FaAngleLeft aria-hidden={true} className='size-12 mobile:size-8' />
        <span className='sr-only'>이전 구절로</span>
      </button>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        navigation={navigation}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
      >
        <div
          slot='container-end'
          className='absolute bottom-[150px] flex w-full items-center justify-between text-lg font-bold text-secondary mobile:text-base'
        >
          <button
            disabled={isStart}
            className={startEndNavClass(isStart)}
            onClick={() => swiperRef.current?.slideTo(START_INDEX)}
          >
            <FiChevronsLeft aria-hidden={true} className='size-6' />
            <span>처음 구절로</span>
          </button>
          <button
            disabled={isEnd}
            className={startEndNavClass(isEnd)}
            onClick={() => swiperRef.current?.slideTo(END_INDEX)}
          >
            <span>끝 구절로</span>
            <FiChevronsRight aria-hidden={true} className='size-6' />
          </button>
        </div>
        {data.map(v => (
          <SwiperSlide key={`card-${v.idx}`}>
            <VerseCard data={v} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        disabled={isEnd}
        className={prevNextNavClass(
          isEnd,
          'to-next-slide right-[-10%] top-[30%]',
        )}
      >
        <FaAngleRight aria-hidden={true} className='size-12 mobile:size-8' />
        <span className='sr-only'>다음 구절로</span>
      </button>
    </>
  );
}

export default CardSwiper;

import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import { useSwiper } from 'swiper/react';

type ToEndSlideButtonProps = {
  slideIndex: number;
};

function ToEndSlideButton({ slideIndex }: ToEndSlideButtonProps) {
  const swiper = useSwiper();
  return (
    <button
      className='flex items-center justify-center space-x-1'
      onClick={() => swiper.slideTo(slideIndex)}
    >
      <span>끝 구절로</span>
      <FiChevronsRight aria-hidden={true} className='size-6' />
    </button>
  );
}

export default ToEndSlideButton;

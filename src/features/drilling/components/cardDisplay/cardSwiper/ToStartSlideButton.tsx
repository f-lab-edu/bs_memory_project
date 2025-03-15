import { useSwiper } from 'swiper/react';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';

function ToStartSlideButton() {
  const swiper = useSwiper();
  return (
    <button
      className='flex items-center justify-center space-x-1'
      onClick={() => swiper.slideTo(0)}
    >
      <FiChevronsLeft aria-hidden={true} className='size-6' />
      <span>처음 구절로</span>
    </button>
  );
}

export default ToStartSlideButton;

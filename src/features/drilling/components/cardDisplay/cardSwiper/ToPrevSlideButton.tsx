import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';

function ToPrevSlideButton() {
  return (
    <button className='to-prev-slide absolute left-[-10%] top-[30%] z-20'>
      <FaAngleLeft aria-hidden={true} className='size-12 mobile:size-8' />
      <span className='sr-only'>이전 구절로</span>
    </button>
  );
}

export default ToPrevSlideButton;

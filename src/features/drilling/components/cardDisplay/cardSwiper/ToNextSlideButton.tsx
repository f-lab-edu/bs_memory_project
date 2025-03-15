import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';

function ToNextSlideButton() {
  return (
    <button className='to-next-slide absolute right-[-10%] top-[30%] z-20'>
      <FaAngleRight aria-hidden={true} className='size-12 mobile:size-8' />
      <span className='sr-only'>다음 구절로</span>
    </button>
  );
}

export default ToNextSlideButton;

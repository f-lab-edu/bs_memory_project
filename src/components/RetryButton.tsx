import { CgRedo } from '@react-icons/all-files/cg/CgRedo';
import cn from '@utils/cn';
import { HTMLAttributes } from 'react';

interface RetryButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  onClickButton: () => void;
}

function RetryButton({ onClickButton, ...props }: RetryButtonProps) {
  const handleClickButton = () => onClickButton();
  return (
    <button title='재시도' onClick={handleClickButton}>
      <span className='sr-only'>재시도</span>
      <CgRedo aria-hidden={true} className={cn('size-7', props.className)} />
    </button>
  );
}

export default RetryButton;

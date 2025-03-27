import { HTMLAttributes } from 'react';
import cn from '@utils/cn';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
function Skeleton({ text, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'h-[30px] w-full animate-pulse rounded bg-slate-300',
        props.className,
      )}
    >
      <span className='sr-only'>{text}</span>
    </div>
  );
}

export default Skeleton;

import { cva, VariantProps } from 'class-variance-authority';
import cn from '@utils/cn';
import { HTMLAttributes } from 'react';

const LoaderVariants = cva(`aspect-square mx-auto mb-1 mt-2 rounded-full`, {
  variants: {
    size: {
      default: 'w-[15px] animate-loaderSM',
      lg: 'w-8 animate-loaderLG mobile:w-6 mobile:animate-loaderMobileLG',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface LoaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LoaderVariants> {}

function Loader({ size, ...props }: LoaderProps) {
  return (
    <>
      <div className='flex min-h-[50px] items-center'>
        <div className={cn(LoaderVariants({ size }), props.className)}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Loader;

import { cva } from 'class-variance-authority';

export const tabVariants = cva(
  'w-full rounded-2xl px-7 py-2.5 text-center mobile:px-2 flex items-center justify-between space-x-1',
  {
    variants: {
      size: {
        md: 'text-[28px] mobile:text-lg',
        sm: 'text-[24px] mobile:text-base',
      },
      color: {
        default: 'bg-yellow-400 text-black',
        light: 'bg-yellow-300/70 text-neutral-600/90',
      },
    },
  },
);
export const caretVariants = cva('flex size-10 items-center justify-center', {
  variants: {
    size: {
      md: 'text-[35px] mobile:text-2xl',
      sm: 'text-[30px] mobile:text-xl',
    },
  },
});

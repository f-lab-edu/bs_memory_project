import Skeleton from '@/shared/ui/Skeleton';

type CommonComboboxSkeletonProps = {
  label: string;
};
function CommonComboboxSkeleton({ label }: CommonComboboxSkeletonProps) {
  return (
    <div className='flex w-full flex-col items-start'>
      <div
        aria-hidden={true}
        className='text-[22px] font-semibold text-secondary mobile:text-base/4'
      >
        {label}
      </div>
      <Skeleton text={`${label} 옵션 로딩중`} className='h-[40px]' />
    </div>
  );
}

export default CommonComboboxSkeleton;

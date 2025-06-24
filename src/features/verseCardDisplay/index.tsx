import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import CardSwiper from 'src/features/verseCardDisplay/components/cardSwiper';

function VerseCardDisplay() {
  return (
    <ComposedBoundary
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ErrorMessage
          className='my-8 h-[400px] rounded-3xl bg-neutral-100 px-9 py-6 align-middle mobile:h-[200px]'
          resetErrorBoundary={resetErrorBoundary}
          error={error}
        />
      )}
      suspenseFallback={<Loader size='lg' className='my-[120px]' />}
    >
      <div className='relative my-8 w-[640px] mobile:w-[300px]'>
        <CardSwiper />
      </div>
    </ComposedBoundary>
  );
}

export default VerseCardDisplay;

import BibleVersionSelect from '@features/drilling/components/bibleVersionSelect';
import CardHideOptionSelect from '@features/drilling/components/cardHideOptionSelect';
import CardDisplay from '@features/drilling/components/cardDisplay';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] max-w-[400px] items-center justify-start space-x-12 mobile:w-full mobile:space-x-3'>
        <ComposedBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorMessage
              error={error}
              resetErrorBoundary={resetErrorBoundary}
            />
          )}
          suspenseFallback={<Loader />}
        >
          <BibleVersionSelect />
        </ComposedBoundary>
        <ComposedBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorMessage
              error={error}
              resetErrorBoundary={resetErrorBoundary}
            />
          )}
          suspenseFallback={<Loader />}
        >
          <CardHideOptionSelect />
        </ComposedBoundary>
      </div>
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
        <CardDisplay />
      </ComposedBoundary>
    </div>
  );
}

export default Drilling;

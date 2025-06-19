import CardDisplay from 'src/features/drilling/components/verseDisplay';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
import BibleVersionSelect from '@features/bibleVersionSelect';
import CardHideOptionSelect from '@features/cardHideOptionSelect';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] w-full items-center justify-around mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <CardHideOptionSelect />
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

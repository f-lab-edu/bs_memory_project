import BibleVersionSelect from '@features/drilling/components/bibleVersionSelect';
import CardHideOptionSelect from '@features/drilling/components/cardHideOptionSelect';
import CardDisplay from '@features/drilling/components/cardDisplay';
import Loader from '@components/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import FetchErrorMessage from '@components/FetchErrorMessage';

function Drilling() {
  const { reset: handleQueryErrorReset } = useQueryErrorResetBoundary();

  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] max-w-[400px] items-center justify-start space-x-12 mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <CardHideOptionSelect />
      </div>
      <ErrorBoundary
        onReset={handleQueryErrorReset}
        fallbackRender={({ resetErrorBoundary }) => (
          <FetchErrorMessage
            className='my-8 flex h-[400px] items-center rounded-3xl bg-neutral-100 px-9 py-6 align-middle text-4xl mobile:h-[200px] mobile:text-xl'
            iconClass='size-10 mobile:size-6 text-sky-600'
            onClickRetryButton={() => resetErrorBoundary()}
          />
        )}
      >
        <Suspense fallback={<Loader size={'lg'} className='my-[120px]' />}>
          <CardDisplay />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Drilling;

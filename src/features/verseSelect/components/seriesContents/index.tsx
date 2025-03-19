import VerseSelector from '@features/verseSelect/components/verseSelector';
import { SeriesDatum } from '@features/verseSelect/types';
import { Suspense, useEffect, useRef } from 'react';
import SubSeriesTabs from '@features/verseSelect/components/subSeriesTabs';
import Loader from '@components/Loader';
import {
  usePrefetchQuery,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import { getSubSeries } from '@apis/series';
import { getVersesSummary } from '@apis/verse';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from '@components/ErrorMessage';
import { CgRedo } from '@react-icons/all-files/cg/CgRedo';

export type SeriesContentsProps = {
  data: SeriesDatum;
  contentsId: string;
  isTabOpen: boolean;
};

function SeriesContents({ data, contentsId, isTabOpen }: SeriesContentsProps) {
  const { reset: handleQueryErrorReset } = useQueryErrorResetBoundary();
  const tabpanelRef = useRef<HTMLDivElement>(null);

  const { sub_series_opt, series_code } = data;
  const hasSubSeries = sub_series_opt === 'Y';

  usePrefetchQuery({
    queryKey: ['subSeriesData', series_code],
    queryFn: () => (hasSubSeries ? getSubSeries(series_code) : null),
  });

  usePrefetchQuery({
    queryKey: ['verseSummaryData', series_code],
    queryFn: () => (!hasSubSeries ? getVersesSummary(series_code) : null),
  });

  useEffect(() => {
    if (isTabOpen) {
      tabpanelRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isTabOpen]);

  return (
    <div
      role='tabpanel'
      id={contentsId}
      hidden={!isTabOpen}
      data-testid={contentsId}
      ref={tabpanelRef}
      className='scroll-mb-[50px] scroll-mt-[100px]'
    >
      {isTabOpen && (
        <ErrorBoundary
          onReset={handleQueryErrorReset}
          fallbackRender={({ resetErrorBoundary }) => (
            <ErrorMessage className='mt-3 pl-4'>
              <div className='flex w-full items-center space-x-3'>
                <button title='재시도' onClick={() => resetErrorBoundary()}>
                  <span className='sr-only'>재시도</span>
                  <CgRedo aria-hidden={true} className='size-7' />
                </button>
                <span>데이터 조회에 실패했습니다.</span>
              </div>
            </ErrorMessage>
          )}
        >
          <Suspense fallback={<Loader />}>
            {hasSubSeries ? (
              <SubSeriesTabs parent_series_code={series_code} />
            ) : (
              <VerseSelector series_code={series_code} />
            )}
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default SeriesContents;

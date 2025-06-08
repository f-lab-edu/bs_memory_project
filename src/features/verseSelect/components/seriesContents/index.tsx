import VerseSelector from '@features/verseSelect/components/verseSelector';
import { Suspense, useEffect, useRef } from 'react';
import SubSeriesTabs from '@features/verseSelect/components/subSeriesTabs';
import Loader from '@/shared/ui/Loader';
import {
  usePrefetchQuery,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import FetchErrorMessage from '@/shared/ui/FetchErrorMessage';
import { SeriesDatum } from '@features/verseSelect/types/seriesData.types';
import {
  getSubSeries,
  SUB_SERIES_QUERY_KEY,
} from '@features/verseSelect/api/getSubSeries';
import {
  getVersesSummary,
  VERSES_SUMMARY_QUERY_KEY,
} from '@features/verseSelect/api/getVersesSummary';

export type SeriesContentsProps = {
  data: SeriesDatum;
  contentsId: string;
  isTabOpen: boolean;
};

function SeriesContents({ data, contentsId, isTabOpen }: SeriesContentsProps) {
  const { reset } = useQueryErrorResetBoundary();
  const tabpanelRef = useRef<HTMLDivElement>(null);

  const { sub_series_opt, series_code } = data;
  const hasSubSeries = sub_series_opt === 'Y';

  usePrefetchQuery({
    queryKey: [SUB_SERIES_QUERY_KEY, series_code],
    queryFn: () => (hasSubSeries ? getSubSeries(series_code) : null),
  });

  usePrefetchQuery({
    queryKey: [VERSES_SUMMARY_QUERY_KEY, series_code],
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
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <FetchErrorMessage
              className='mt-3 pl-4'
              onClickRetryButton={resetErrorBoundary}
            />
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

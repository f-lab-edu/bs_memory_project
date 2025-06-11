import VerseSelector from '@features/verseSelect/components/verseSelector';
import { useEffect, useRef } from 'react';
import SubSeriesTabs from '@features/verseSelect/components/subSeriesTabs';
import { usePrefetchQuery } from '@tanstack/react-query';
import { SeriesDatum } from '@features/verseSelect/types/seriesData.types';
import {
  getSubSeries,
  SUB_SERIES_QUERY_KEY,
} from '@features/verseSelect/api/getSubSeries';
import {
  getVersesSummary,
  VERSES_SUMMARY_QUERY_KEY,
} from '@features/verseSelect/api/getVersesSummary';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';

export type SeriesContentsProps = {
  data: SeriesDatum;
  testId: string;
  isTabOpen: boolean;
};

function SeriesContents({ data, testId, isTabOpen }: SeriesContentsProps) {
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
      id={testId}
      hidden={!isTabOpen}
      data-testid={testId}
      ref={tabpanelRef}
      className='scroll-mb-[50px] scroll-mt-[100px]'
    >
      {isTabOpen && (
        <ComposedBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorMessage
              error={error}
              resetErrorBoundary={resetErrorBoundary}
              className='mt-3 pl-4'
            />
          )}
          suspenseFallback={<Loader />}
        >
          {hasSubSeries ? (
            <SubSeriesTabs parent_series_code={series_code} />
          ) : (
            <VerseSelector series_code={series_code} />
          )}
        </ComposedBoundary>
      )}
    </div>
  );
}

export default SeriesContents;

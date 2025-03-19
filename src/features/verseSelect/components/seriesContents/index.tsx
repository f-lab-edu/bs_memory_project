import VerseSelector from '@features/verseSelect/components/verseSelector';
import { SeriesDatum } from '@features/verseSelect/types';
import { Suspense, useEffect, useRef } from 'react';
import SubSeriesTabs from '@features/verseSelect/components/subSeriesTabs';
import Loader from '@components/Loader';
import { usePrefetchQuery } from '@tanstack/react-query';
import { getSubSeries } from '@apis/series';
import { getVersesSummary } from '@apis/verse';

export type SeriesContentsProps = {
  data: SeriesDatum;
  contentsId: string;
  isTabOpen: boolean;
};

function SeriesContents({ data, contentsId, isTabOpen }: SeriesContentsProps) {
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
        <Suspense fallback={<Loader />}>
          {hasSubSeries ? (
            <SubSeriesTabs parent_series_code={series_code} />
          ) : (
            <VerseSelector series_code={series_code} />
          )}
        </Suspense>
      )}
    </div>
  );
}

export default SeriesContents;

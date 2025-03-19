import { useQuery } from '@tanstack/react-query';
import { getSubSeries } from '@apis/series';
import { getVersesSummary } from '@apis/verse';
import Loader from '@components/Loader';
import SeriesTab from '@features/verseSelect/components/seriesTab';
import VerseSelector from '@features/verseSelect/components/verseSelector';
import { SeriesDatum } from '@features/verseSelect/types';
import { useEffect, useRef } from 'react';

export type SeriesContentsProps = {
  data: SeriesDatum;
  contentsId: string;
  isTabOpen: boolean;
};

function SeriesContents({ data, contentsId, isTabOpen }: SeriesContentsProps) {
  const tabpanelRef = useRef<HTMLDivElement>(null);

  const { sub_series_opt, series_code } = data;

  const hasSubSeries = sub_series_opt === 'Y';

  const {
    data: subSeriesData,
    isLoading: isSubSeriesPending,
    isError: isSubSeriesError,
  } = useQuery({
    queryKey: [series_code, hasSubSeries],
    queryFn: () => getSubSeries(series_code),
    enabled: isTabOpen && hasSubSeries,
  });

  const {
    data: verseData,
    isLoading: isVersePending,
    isError: isVerseError,
  } = useQuery({
    queryKey: [series_code, hasSubSeries],
    queryFn: () => getVersesSummary(series_code),
    enabled: isTabOpen && !hasSubSeries,
  });

  const isPending = isSubSeriesPending || isVersePending;
  const isError = isSubSeriesError || isVerseError;

  useEffect(() => {
    if (isTabOpen && !isPending && !isError) {
      tabpanelRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isTabOpen, isPending, isError]);

  if (isPending) return <Loader />;
  if (isError) return <p>데이터 조회에 실패했습니다.</p>;

  return (
    <div
      role='tabpanel'
      id={contentsId}
      hidden={!isTabOpen}
      data-testid={contentsId}
      ref={tabpanelRef}
      className='scroll-mb-[50px] scroll-mt-[100px]'
    >
      {isTabOpen &&
        (hasSubSeries ? (
          <div
            role='tablist'
            aria-multiselectable
            className={'mt-2.5 flex flex-col items-center space-y-3'}
          >
            {subSeriesData!.map(item => (
              <SeriesTab key={item.series_code} data={item} />
            ))}
          </div>
        ) : (
          <VerseSelector data={verseData!} />
        ))}
    </div>
  );
}

export default SeriesContents;

import { useQuery } from '@tanstack/react-query';
import { getSubSeries } from '@apis/series.ts';
import { getVersesSummary } from '@apis/verse.ts';
import Loader from '@components/Loader.tsx';
import SeriesTab from '@features/verseSelect/components/seriesTab';
import VerseSelector from '@features/verseSelect/components/verseSelector';
import { SeriesDatum } from '@features/verseSelect/types.ts';

export type SeriesContentsProps = {
  data: SeriesDatum;
  contentsId: string;
};

function SeriesContents({ data, contentsId }: SeriesContentsProps) {
  const { sub_series_opt, series_code } = data;

  const hasSubSeries = sub_series_opt === 'Y';

  const {
    data: subSeriesData,
    isPending: isSubSeriesPending,
    isError: isSubSeriesError,
  } = useQuery({
    queryKey: [series_code, hasSubSeries],
    queryFn: () => getSubSeries(series_code),
    enabled: hasSubSeries,
  });

  const {
    data: verseData,
    isPending: isVersePending,
    isError: isVerseError,
  } = useQuery({
    queryKey: [series_code, hasSubSeries],
    queryFn: () => getVersesSummary(series_code),
    enabled: !hasSubSeries,
  });

  if (isSubSeriesPending || isVersePending) return <Loader />;
  if (isSubSeriesError || isVerseError)
    return <p>데이터 조회에 실패했습니다.</p>;

  return (
    <div aria-controls={contentsId}>
      {hasSubSeries ? (
        <div className='mt-2.5 flex flex-col items-center space-y-3'>
          {subSeriesData.map(item => (
            <SeriesTab key={item.series_code} data={item} />
          ))}
        </div>
      ) : (
        <VerseSelector data={verseData} />
      )}
    </div>
  );
}

export default SeriesContents;

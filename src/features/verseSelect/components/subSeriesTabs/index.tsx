import SeriesTab from '@features/verseSelect/components/seriesTab';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getSubSeries } from '@apis/series';

type SubSeriesTabsProps = {
  parent_series_code: string;
};

function SubSeriesTabs({ parent_series_code }: SubSeriesTabsProps) {
  const { data } = useSuspenseQuery({
    queryKey: ['subSeriesData', parent_series_code],
    queryFn: () => getSubSeries(parent_series_code),
  });

  return (
    <div
      role='tablist'
      aria-multiselectable
      className={'mt-2.5 flex flex-col items-center space-y-3'}
    >
      {data.map(item => (
        <SeriesTab key={item.series_code} data={item} />
      ))}
    </div>
  );
}

export default SubSeriesTabs;

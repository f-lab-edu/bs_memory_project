import SeriesTab from '@features/verseSelect/components/seriesTab';
import { useSubSeries } from '@features/verseSelect/api/getSubSeries';

type SubSeriesTabsProps = {
  parent_series_code: string;
};

function SubSeriesTabs({ parent_series_code }: SubSeriesTabsProps) {
  const { data } = useSubSeries(parent_series_code);

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

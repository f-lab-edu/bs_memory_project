import { useLoaderData } from 'react-router-dom';
import SeriesTab from '@features/verseSelect/components/seriesTab';
import { SeriesData } from '@features/verseSelect/types.ts';

function VerseSelect() {
  const data = useLoaderData<SeriesData>();

  return (
    <div className='my-16 w-full space-y-4'>
      {data.map(item => (
        <SeriesTab key={item.series_code} data={item} />
      ))}
    </div>
  );
}

export default VerseSelect;

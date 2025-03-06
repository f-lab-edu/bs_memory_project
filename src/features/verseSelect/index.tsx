import { useLoaderData } from 'react-router-dom';
import { SeriesData } from './types.ts';
import SeriesTab from './components/seriesTab';

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

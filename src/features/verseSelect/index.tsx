import SeriesTab from '@features/verseSelect/components/seriesTab';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { SeriesDataTypes } from '@features/verseSelect/types/seriesData.types';

function Index() {
  const data = useLoaderData<SeriesDataTypes>();
  const resetVerseSelect = useVerseSelectStore(state => state.reset);

  useEffect(() => {
    resetVerseSelect();
  }, [resetVerseSelect]);

  return (
    <div
      role='tabList'
      aria-multiselectable
      className='my-16 w-[600px] space-y-4 mobile:w-[300px]'
    >
      {data.map(item => (
        <SeriesTab key={item.series_code} data={item} />
      ))}
    </div>
  );
}

export default Index;

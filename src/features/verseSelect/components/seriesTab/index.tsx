import { useState } from 'react';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';
import SeriesContents from '@features/verseSelect/components/seriesContents';
import { SeriesDatum } from '@features/verseSelect/types';
import {
  caretVariants,
  tabVariants,
} from '@features/verseSelect/components/seriesTab/css/variants.ts';
import cn from '@utils/cn.ts';

type SeriesTabProps = {
  data: SeriesDatum;
};

function SeriesTab({ data }: SeriesTabProps) {
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);

  const isRootSeries = data.parent_series === null;

  const handleClickSeriesTab = () => setIsTabOpen(prev => !prev);

  const contentsId = `contents-of-series${data.series_code}`;

  return (
    <div className='w-full'>
      <button
        role='tab'
        aria-controls={contentsId}
        aria-expanded={isTabOpen}
        className={cn(
          isRootSeries
            ? tabVariants({ size: 'md', color: 'default' })
            : tabVariants({ size: 'sm', color: 'light' }),
        )}
        onClick={handleClickSeriesTab}
      >
        <span className={`min-w-[200px] text-left font-semibold`}>
          {data.series_name}
        </span>
        <span
          className={cn(
            isRootSeries
              ? caretVariants({ size: 'md' })
              : caretVariants({ size: 'sm' }),
          )}
        >
          {isTabOpen ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </button>
      {
        <SeriesContents
          contentsId={contentsId}
          data={data}
          isTabOpen={isTabOpen}
        />
      }
    </div>
  );
}

export default SeriesTab;

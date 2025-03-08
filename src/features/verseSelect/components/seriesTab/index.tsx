import { useState } from 'react';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';
import SeriesContents from '@features/verseSelect/components/seriesContents';
import { SeriesDatum } from '@features/verseSelect/types';

type SeriesTabProps = {
  data: SeriesDatum;
};

function SeriesTab({ data }: SeriesTabProps) {
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);

  const isRootSeries = data.parent_series === null;

  const bgColor = isRootSeries ? 'bg-yellow-400' : 'bg-yellow-300/70';
  const textColor = isRootSeries ? 'text-black' : 'text-neutral-600/90';
  const iconColor = isRootSeries ? 'text-black' : 'text-neutral-600/90';
  const textSize = isRootSeries
    ? 'text-[28px] mobile:text-lg'
    : 'text-[24px] mobile:text-base';
  const iconSize = isRootSeries
    ? 'text-[35px] mobile:text-2xl'
    : 'text-[30px] mobile:text-xl';

  const onTabClickHandler = () => setIsTabOpen(prev => !prev);

  const contentsId = `contents-of-series${data.series_code}`;

  return (
    <div className='w-full'>
      <button
        aria-expanded={isTabOpen}
        aria-controls={contentsId}
        className={`w-full rounded-2xl px-7 py-2.5 text-center mobile:px-2 ${textSize} ${bgColor} flex items-center justify-between space-x-1`}
        onClick={onTabClickHandler}
      >
        <span className={`${textColor} min-w-[200px] text-left font-semibold`}>
          {data.series_name}
        </span>
        <span
          className={`flex size-10 items-center justify-center ${iconSize}`}
        >
          {isTabOpen ? (
            <FaCaretUp className={iconColor} />
          ) : (
            <FaCaretDown className={iconColor} />
          )}
        </span>
      </button>
      {isTabOpen && <SeriesContents contentsId={contentsId} data={data} />}
    </div>
  );
}

export default SeriesTab;

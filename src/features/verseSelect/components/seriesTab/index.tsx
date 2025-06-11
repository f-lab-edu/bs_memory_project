import { useState } from 'react';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';
import SeriesContents from '@features/verseSelect/components/seriesContents';
import cn from '@utils/cn';
import { cva } from 'class-variance-authority';
import { SeriesDatum } from '@features/verseSelect/types/seriesData.types';
import { createSeriesTabPanelId } from '@utils/componentUtils/seriesTab';

const tabVariants = cva(
  'w-full rounded-2xl px-7 py-2.5 text-center mobile:px-2 flex items-center justify-between space-x-1',
  {
    variants: {
      size: {
        md: 'text-[28px] mobile:text-lg',
        sm: 'text-[24px] mobile:text-base',
      },
      color: {
        default: 'bg-yellow-400 text-black',
        light: 'bg-yellow-300/70 text-neutral-600/90',
      },
    },
  },
);

const caretVariants = cva('flex size-10 items-center justify-center', {
  variants: {
    size: {
      md: 'text-[35px] mobile:text-2xl',
      sm: 'text-[30px] mobile:text-xl',
    },
  },
});

type SeriesTabProps = {
  data: SeriesDatum;
};

function SeriesTab({ data }: SeriesTabProps) {
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);

  const isRootSeries = data.parent_series === null;

  const handleClickSeriesTab = () => setIsTabOpen(prev => !prev);

  const tabPanelId = createSeriesTabPanelId(data.series_code);

  return (
    <div className='w-full'>
      <button
        role='tab'
        aria-controls={tabPanelId}
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
      <SeriesContents testId={tabPanelId} data={data} isTabOpen={isTabOpen} />
    </div>
  );
}

export default SeriesTab;

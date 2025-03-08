import { ChangeEvent } from 'react';
import { useVerseSelectStore } from '@store/verseSelectStore.ts';
import { VerseSummaryData } from '@features/verseSelect/types.ts';
import VerseOption from '@features/verseSelect/components/verseSelector/VerseOption.tsx';

type VerseSelectorProps = {
  data: VerseSummaryData;
};

function VerseSelector({ data }: VerseSelectorProps) {
  const resetSelected = useVerseSelectStore(state => state.reset);
  const addSelected = useVerseSelectStore(state => state.add);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) resetSelected();
    else addSelected(data.map(v => v.idx));
  };

  return (
    <ul
      role='list'
      className='m-2 max-h-[200px] divide-y divide-greyBlue/50 overflow-y-auto'
    >
      <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:py-1.5'>
        <div className='flex basis-[40px] justify-center'>
          <input
            type='checkbox'
            id={`${data[0].series_code}-all`}
            className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
            onChange={handleChangeCheckbox}
          />
        </div>
        <label
          htmlFor={`${data[0].series_code}-all`}
          className='max-w-[500px] truncate text-xl font-semibold text-greyBlue mobile:text-base'
        >
          {'전체'}
        </label>
      </li>
      {data.map(item => (
        <VerseOption key={`${item.series_code}-${item.card_num}`} data={item} />
      ))}
    </ul>
  );
}

export default VerseSelector;

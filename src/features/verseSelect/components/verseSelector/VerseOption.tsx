import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { ChangeEvent } from 'react';

import { VerseSummaryDatum } from '@features/verseSelect/types/verseSummaryData.types';

type VerseOptionProps = {
  data: VerseSummaryDatum;
};

function VerseOption({ data }: VerseOptionProps) {
  const {
    idx,
    theme,
    chapter,
    verse1,
    verse2,
    series_code,
    card_num,
    bible_code: { bible_name },
  } = data;

  const isSelected = useVerseSelectStore(useShallow(state => state.hasId(idx)));

  const addSelected = useVerseSelectStore(state => state.add);
  const removeSelected = useVerseSelectStore(state => state.remove);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) removeSelected(idx);
    else addSelected(idx);
  };

  return (
    <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:py-1.5'>
      <div className='flex basis-[40px] justify-center'>
        <input
          type='checkbox'
          id={`${series_code}-${card_num}`}
          className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
          checked={isSelected}
          onChange={handleChangeCheckbox}
        />
      </div>
      <label
        htmlFor={`${series_code}-${card_num}`}
        className='flex max-w-[500px] grow items-center truncate text-xl font-medium mobile:text-base'
      >
        <span className='grow font-semibold'>{theme}</span>
        <span className='mr-2 max-w-[140px]'>
          {`${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`}
        </span>
      </label>
    </li>
  );
}

export default VerseOption;

import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { ChangeEvent } from 'react';
import { VerseSummaryDatum } from '@features/verseSelect/types/verseSummaryData.types';
import {
  createVerseOptionId,
  createVerseOptionText,
} from '@utils/componentUtils/verseOption';

type VerseOptionProps = {
  data: VerseSummaryDatum;
};

function VerseOption({ data }: VerseOptionProps) {
  const { idx, theme } = data;

  const isSelected = useVerseSelectStore(useShallow(state => state.hasId(idx)));

  const addSelected = useVerseSelectStore(state => state.add);
  const removeSelected = useVerseSelectStore(state => state.remove);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) removeSelected(idx);
    else addSelected(idx);
  };

  const checkboxId = createVerseOptionId(data);

  return (
    <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:py-1.5'>
      <div className='flex basis-[40px] justify-center'>
        <input
          type='checkbox'
          id={checkboxId}
          data-testid={checkboxId}
          className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
          checked={isSelected}
          aria-checked={isSelected}
          onChange={handleChangeCheckbox}
        />
      </div>
      <label
        htmlFor={checkboxId}
        className='flex max-w-[500px] grow items-center truncate text-xl font-medium mobile:text-base'
      >
        <span className='grow font-semibold'>{theme}</span>
        <span className='mr-2 max-w-[140px]'>
          {createVerseOptionText(data)}
        </span>
      </label>
    </li>
  );
}

export default VerseOption;

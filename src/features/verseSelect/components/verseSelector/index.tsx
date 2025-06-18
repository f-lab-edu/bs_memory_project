import { ChangeEvent } from 'react';
import { useVerseSelectStore } from '@store/verseSelectStore';
import VerseOption from '@features/verseSelect/components/verseOption';
import { useVersesSummary } from '@features/verseSelect/api/getVersesSummary';
import { createAllVerseOptionId } from '@utils/componentUtils/verseOption';

type VerseSelectorProps = {
  series_code: string;
};

function VerseSelector({ series_code }: VerseSelectorProps) {
  const resetSelected = useVerseSelectStore(state => state.reset);
  const addSelected = useVerseSelectStore(state => state.add);

  const { data } = useVersesSummary(series_code);

  const handleChangeAllCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) resetSelected();
    else addSelected(data.map(v => v.idx));
  };

  const allCheckboxId = createAllVerseOptionId(data[0].series_code);

  return (
    <ul
      role='list'
      className='m-2 max-h-[200px] divide-y divide-greyBlue/50 overflow-y-auto'
    >
      <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:py-1.5'>
        <div className='flex basis-[40px] justify-center'>
          <input
            type='checkbox'
            id={allCheckboxId}
            data-testid={allCheckboxId}
            className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
            onChange={handleChangeAllCheckbox}
          />
        </div>
        <label
          htmlFor={allCheckboxId}
          className='max-w-[500px] truncate text-xl font-semibold text-greyBlue mobile:text-base'
        >
          전체
        </label>
      </li>
      {data.map(item => (
        <VerseOption key={`${item.series_code}-${item.card_num}`} data={item} />
      ))}
    </ul>
  );
}

export default VerseSelector;

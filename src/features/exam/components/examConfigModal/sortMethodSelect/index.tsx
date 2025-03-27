import { useExamConfigStore } from '@features/exam/store/examConfigStore';
import { useShallow } from 'zustand/react/shallow';
import CommonCombobox from '@components/commonCombobox';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCardSortMethod } from '@apis/cardSortMethod';

function SortMethodSelect() {
  const { name, code } = useExamConfigStore(
    useShallow(state => state.sortMethod),
  );
  const setSortMethod = useExamConfigStore(state => state.setSortMethod);

  const { data } = useSuspenseQuery({
    queryKey: ['sortMethod'],
    queryFn: getCardSortMethod,
  });

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <div className='flex items-center text-left'>
      <CommonCombobox
        label={'순서'}
        items={items}
        selectedItem={{ name, value: code, id: code }}
        onChangeCombobox={({ name, value }) =>
          setSortMethod({ name, code: value })
        }
      />
    </div>
  );
}

export default SortMethodSelect;

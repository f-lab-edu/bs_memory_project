import { useShallow } from 'zustand/react/shallow';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCardSortMethod } from '@apis/cardSortMethod';
import useExamConfigContext from '@/hooks/useExamConfigContext';

function SortMethodSelect() {
  const { name, code } = useExamConfigContext(
    useShallow(state => state.sortMethod),
  );
  const setSortMethod = useExamConfigContext(state => state.setSortMethod);

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

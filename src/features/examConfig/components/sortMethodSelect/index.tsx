import { useShallow } from 'zustand/react/shallow';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import useExamConfigContext from '@/hooks/useExamConfigContext';
import { useCardSortMethods } from '@features/examConfig/api/getCardSortMethods';

function SortMethodSelect() {
  const { name, code } = useExamConfigContext(
    useShallow(state => state.sortMethod),
  );
  const setSortMethod = useExamConfigContext(state => state.setSortMethod);

  const { data } = useCardSortMethods();

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <CommonCombobox
      items={items}
      selectedItem={{ name, value: code, id: code }}
      onChangeCombobox={({ name, value }) =>
        setSortMethod({ name, code: value })
      }
    />
  );
}

export default SortMethodSelect;

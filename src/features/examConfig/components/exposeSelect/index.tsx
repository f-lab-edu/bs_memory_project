import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { useShallow } from 'zustand/react/shallow';
import useExamConfigContext from '@/hooks/useExamConfigContext';
import { useExamExposeOptions } from '@features/examConfig/api/getExamExposeOptions';

function ExposeSelect() {
  const { name, code } = useExamConfigContext(
    useShallow(state => state.exposeOption),
  );
  const setExposeOption = useExamConfigContext(state => state.setExposeOption);

  const { data } = useExamExposeOptions();

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <CommonCombobox
      items={items}
      selectedItem={{ name, value: code, id: code }}
      onChangeCombobox={({ name, value }) =>
        setExposeOption({ name, code: value })
      }
    />
  );
}

export default ExposeSelect;

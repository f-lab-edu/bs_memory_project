import CommonCombobox from '@components/commonCombobox';
import { useShallow } from 'zustand/react/shallow';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getExamExposeOptions } from '@apis/exposeOption';
import useExamConfigContext from '@/hooks/useExamConfigContext';

function ExposeSelect() {
  const { name, code } = useExamConfigContext(
    useShallow(state => state.exposeOption),
  );
  const setExposeOption = useExamConfigContext(state => state.setExposeOption);

  const { data } = useSuspenseQuery({
    queryKey: ['exposeOption'],
    queryFn: getExamExposeOptions,
  });

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <div className='flex items-center text-left'>
      <CommonCombobox
        label={'표시'}
        items={items}
        selectedItem={{ name, value: code, id: code }}
        onChangeCombobox={({ name, value }) =>
          setExposeOption({ name, code: value })
        }
      />
    </div>
  );
}

export default ExposeSelect;

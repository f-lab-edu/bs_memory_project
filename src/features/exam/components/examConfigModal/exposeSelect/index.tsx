import CommonCombobox from '@components/commonCombobox';
import { useExamConfigStore } from '@features/exam/store/examConfigStore.ts';
import { useShallow } from 'zustand/react/shallow';
import { useQuery } from '@tanstack/react-query';
import { getExamExposeOptions } from '@apis/exposeOption.ts';
import Loader from '@components/Loader.tsx';

function ExposeSelect() {
  const { name, code } = useExamConfigStore(
    useShallow(state => state.exposeOption),
  );
  const setExposeOption = useExamConfigStore(state => state.setExposeOption);

  const { data, isPending, isError } = useQuery({
    queryKey: ['exposeOption'],
    queryFn: getExamExposeOptions,
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터 조회에 실패했습니다.</div>;

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

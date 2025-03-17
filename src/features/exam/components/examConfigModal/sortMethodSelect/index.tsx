import { useExamConfigStore } from '@features/exam/store/examConfigStore.ts';
import { useShallow } from 'zustand/react/shallow';
import CommonCombobox from '@components/commonCombobox';
import { useQuery } from '@tanstack/react-query';
import { getCardSortMethod } from '@apis/cardSortMethod.ts';
import Loader from '@components/Loader.tsx';

function SortMethodSelect() {
  const { name, code } = useExamConfigStore(
    useShallow(state => state.sortMethod),
  );
  const setSortMethod = useExamConfigStore(state => state.setSortMethod);

  const { data, isPending, isError } = useQuery({
    queryKey: ['sortMethod'],
    queryFn: getCardSortMethod,
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터 조회에 실패했습니다.</div>;

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

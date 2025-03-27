import CommonCombobox from '@components/commonCombobox';
import { useQuery } from '@tanstack/react-query';
import { getBibleVersions } from '@apis/bibleVersion';
import Loader from '@components/Loader';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { CommonComboboxItem } from '@components/commonCombobox/type';
import { useShallow } from 'zustand/react/shallow';

function BibleVersionSelect() {
  const selectedItem = useBibleVersionStore(
    useShallow(({ bibleVersion: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );

  const setBibleVersion = useBibleVersionStore(state => state.setBibleVersion);

  const { data, isPending, isError } = useQuery({
    queryKey: ['bibleVersion'],
    queryFn: getBibleVersions,
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터를 조회하지 못했습니다.</div>;

  const selectItems = data.map(({ code, name }) => ({
    name,
    value: code,
    id: code,
  }));

  return (
    <CommonCombobox
      label={'성경버전'}
      items={selectItems}
      selectedItem={selectedItem}
      onChangeCombobox={(item: CommonComboboxItem) =>
        setBibleVersion({ name: item.name, code: item.value })
      }
    />
  );
}

export default BibleVersionSelect;

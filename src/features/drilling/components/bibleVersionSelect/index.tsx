import {
  CommonCombobox,
  CommonComboboxItem,
} from 'src/shared/ui/commonCombobox';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useShallow } from 'zustand/react/shallow';
import { useBibleVersions } from '@features/drilling/api/getBibleVersions';

function BibleVersionSelect() {
  const selectedItem = useBibleVersionStore(
    useShallow(({ bibleVersion: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );

  const setBibleVersion = useBibleVersionStore(state => state.setBibleVersion);

  const { data } = useBibleVersions();

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

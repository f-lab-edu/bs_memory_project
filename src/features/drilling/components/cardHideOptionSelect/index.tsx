import { useQuery } from '@tanstack/react-query';
import Loader from '@/shared/ui/Loader';
import {
  CommonCombobox,
  CommonComboboxItem,
} from 'src/shared/ui/commonCombobox';
import { useCardHideOptionStore } from '@store/drilling/cardHideOptionStore';
import { getCardHideOption } from '@apis/cardHideOption';
import { useShallow } from 'zustand/react/shallow';

function CardHideOptionSelect() {
  const selectedItem = useCardHideOptionStore(
    useShallow(({ cardHideOption: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );
  const setCardHideOption = useCardHideOptionStore(
    state => state.setCardHideOption,
  );

  const { data, isPending, isError } = useQuery({
    queryKey: ['cardHideOption'],
    queryFn: getCardHideOption,
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터를 조회하지 못했습니다.</div>;

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <CommonCombobox
      label={'숨김'}
      items={items}
      selectedItem={selectedItem}
      onChangeCombobox={(item: CommonComboboxItem) => {
        setCardHideOption({ name: item.name, code: item.value });
      }}
    />
  );
}

export default CardHideOptionSelect;

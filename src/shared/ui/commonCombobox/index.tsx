import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from '@headlessui/react';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

export type CommonComboboxItem = {
  id: string;
  value: string;
  name: string;
};

export type CommonComboboxProps = {
  label: string;
  items: CommonComboboxItem[];
  onChangeCombobox: (item: CommonComboboxItem) => void;
  selectedItem: CommonComboboxItem;
};

// todo - Label 밖으로 빼기
export function CommonCombobox({
  label,
  items,
  onChangeCombobox,
  selectedItem,
}: CommonComboboxProps) {
  const handleChangeCombobox = (item: CommonComboboxItem) =>
    onChangeCombobox(item);

  return (
    <Combobox as='div' value={selectedItem} onChange={handleChangeCombobox}>
      <Label className='block text-[22px] font-semibold text-secondary mobile:text-base/4'>
        {label}
      </Label>
      <div className='relative mt-2'>
        <ComboboxInput
          className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
          displayValue={(item: CommonComboboxItem) => item.name}
          readOnly={true}
        />
        <ComboboxButton className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <FaChevronDown
            className='size-5 text-gray-400 mobile:size-3'
            aria-hidden='true'
          />
        </ComboboxButton>

        <ComboboxOptions className='absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white text-xl shadow-lg ring-1 ring-black/5 focus:outline-none mobile:text-sm'>
          {items.map(item => (
            <ComboboxOption
              key={item.id}
              value={item}
              className='group relative cursor-default select-none py-2 pl-10 pr-3 text-secondary data-[focus]:bg-secondary data-[focus]:text-white data-[focus]:outline-none mobile:pl-6'
            >
              <span className='block truncate group-data-[selected]:font-semibold'>
                {item.name}
              </span>

              <span className='absolute inset-y-0 left-0 hidden items-center pl-2.5 text-secondary group-data-[selected]:flex group-data-[focus]:text-white mobile:pl-1.5'>
                <FaCheck className='size-4 mobile:size-3' aria-hidden='true' />
              </span>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}

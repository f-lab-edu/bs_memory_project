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

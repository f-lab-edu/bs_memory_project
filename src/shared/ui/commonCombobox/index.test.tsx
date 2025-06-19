import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render } from '@/lib/test/testUtils/render';
import { screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  CommonCombobox,
  CommonComboboxItem,
} from '@/shared/ui/commonCombobox/index';
import { Field } from '@headlessui/react';

const COMBOBOX_LABEL = 'COMBOBOX';
const items: CommonComboboxItem[] = [
  {
    id: 'option-1-id',
    name: 'option-1',
    value: 'option-1-value',
  },
  {
    id: 'option-2-id',
    name: 'option-2',
    value: 'option-2-value',
  },
  {
    id: 'option-3-id',
    name: 'option-3',
    value: 'option-3-value',
  },
];
const selectedItem = items[0];
const handleChangeCombobox = vi.fn<(item: CommonComboboxItem) => void>();

describe('CommonCombobox Test', () => {
  beforeEach(() => {
    render(
      <Field>
        <CommonCombobox.Label>{COMBOBOX_LABEL}</CommonCombobox.Label>
        <CommonCombobox
          items={items}
          selectedItem={selectedItem}
          onChangeCombobox={handleChangeCombobox}
        />
      </Field>,
    );
  });

  test('renders combobox, combobox button with first item selected', async () => {
    await waitFor(() => {
      expect(
        screen.queryByRole('combobox', { name: COMBOBOX_LABEL }),
      ).not.toBeNull();
      expect(screen.queryByRole('button', { expanded: false })).not.toBeNull();
      expect(screen.queryByDisplayValue(selectedItem.name)).not.toBeNull();
    });
  });

  test('Combobox button toggles associated listbox', async () => {
    const user = userEvent.setup();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    expect(comboboxButton.ariaExpanded).toBe('true');
    expect(screen.queryByRole('listbox')).not.toBeNull();

    await user.click(comboboxButton);

    expect(comboboxButton.ariaExpanded).toBe('false');
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  test('Associated listbox renders a list of options', async () => {
    const user = userEvent.setup();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      items.forEach(v => {
        expect(
          within(listbox).queryByRole('option', { name: v.name }),
        ).not.toBeNull();
      });
    });
  });
});

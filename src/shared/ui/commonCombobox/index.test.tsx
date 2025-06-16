import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render } from '@/lib/test/testUtils/render';
import { cleanup, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  CommonCombobox,
  CommonComboboxItem,
} from '@/shared/ui/commonCombobox/index';
import { BIBLE_VERSIONS_LIST } from '@utils/constants';
import { Field } from '@headlessui/react';

const label = '성경버전';
const items: CommonComboboxItem[] = BIBLE_VERSIONS_LIST.map(
  ({ name, code }) => ({
    name,
    value: code,
    id: code,
  }),
);
const selectedItem: CommonComboboxItem = items[0];
const handleChangeCombobox = vi.fn<(item: CommonComboboxItem) => void>();

describe('CommonCombobox Test', () => {
  beforeEach(() => {
    render(
      <Field>
        <CommonCombobox.Label>{label}</CommonCombobox.Label>
        <CommonCombobox
          items={items}
          selectedItem={selectedItem}
          onChangeCombobox={handleChangeCombobox}
        />
      </Field>,
    );
  });
  afterEach(() => cleanup());

  test('Combobox renders', async () => {
    await waitFor(() => {
      expect(screen.queryByRole('combobox', { name: label })).not.toBeNull();
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

import { describe, expect, test } from 'vitest';
import { screen, waitFor, within } from '@testing-library/react';
import { render } from '@/lib/test/testUtils/render';
import BibleVersionSelect from '@features/bibleVersionSelect/index';
import mockBibleVersionStore from '@/lib/test/testUtils/mocks/mockBibleVersionStore';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { userEvent } from '@testing-library/user-event';
import { BIBLE_VERSIONS } from '@/mock/mockData';

describe('BibleVersionSelect Test', () => {
  beforeEach(() => {
    mockBibleVersionStore();
    render(<BibleVersionSelect />);
  });

  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  test('Not until loader presents, it renders combobox named "성경버전"', async () => {
    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

    expect(screen.queryByRole('combobox', { name: '성경버전' })).not.toBeNull();
  });

  test('when clicks toggle button, it renders a list of bible version options', async () => {
    const user = userEvent.setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

    const comboboxButton = screen.getByRole('button', { name: '옵션 선택' });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      BIBLE_VERSIONS.forEach(data => {
        expect(
          within(listbox).queryByRole('option', { name: data.name }),
        ).not.toBeNull();
      });
    });
  });
});

import { describe, expect, test } from 'vitest';
import { screen, waitFor, within } from '@testing-library/react';
import { render } from '@/lib/test/testUtils/render';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { userEvent } from '@testing-library/user-event';
import { CARD_HIDE_OPTIONS } from '@/mock/mockData';
import CardHideOptionSelect from '@features/cardHideOptionSelect/index';

const COMBOBOX_LABEL = '숨김';

const mockCardHideOptionSelectStore = () => {
  vi.mock('@store/drilling/cardHideOptionStore', async () => {
    return await vi.importActual('@store/drilling/cardHideOptionStore');
  });
};

describe('CardHideOptionSelect Test', () => {
  beforeEach(() => {
    mockCardHideOptionSelectStore();
    render(<CardHideOptionSelect />);
  });

  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  test('Not until loader presents, it renders combobox named "숨김"', async () => {
    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

    expect(
      screen.queryByRole('combobox', { name: COMBOBOX_LABEL }),
    ).not.toBeNull();
  });

  test('when clicks toggle button, it renders a list of card hide options', async () => {
    const user = userEvent.setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

    const comboboxButton = screen.getByRole('button', { name: '옵션 선택' });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      CARD_HIDE_OPTIONS.forEach(data => {
        expect(
          within(listbox).queryByRole('option', { name: data.name }),
        ).not.toBeNull();
      });
    });
  });
});

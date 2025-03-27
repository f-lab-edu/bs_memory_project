import { describe, expect, test } from 'vitest';
import { VERSE_SUMMARY_DATA } from '@/mock/mockData.ts';
import { screen } from '@testing-library/react';
import { render } from '@/test/test-utils.tsx';
import VerseSelector from '@features/verseSelect/components/verseSelector/index.tsx';
import { userEvent } from '@testing-library/user-event';

describe('VerseSelector test', () => {
  test('when toggles "전체" checkbox, it toggles every verse checkboxes', async () => {
    const user = userEvent.setup();

    render(<VerseSelector data={VERSE_SUMMARY_DATA} />);

    const allCheckbox = await screen.findByRole('checkbox', {
      name: '전체',
      checked: false,
    });

    await user.click(allCheckbox);

    await expect(
      screen.findAllByRole('checkbox', { checked: false }),
    ).rejects.toThrowError();

    await user.click(allCheckbox);

    await expect(
      screen.findAllByRole('checkbox', { checked: true }),
    ).rejects.toThrowError();
  });
});

import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import { cleanup, screen, waitFor, within } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import SeriesTab from '@features/verseSelect/components/seriesTab/index';
import { render } from '@/lib/test/render';
import {
  SERIES_DATA,
  SERIES_DATA_HAS_SUB,
  SERIES_DATA_NO_SUB,
  SERIES_DATA_SUB,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData';
import { createSeriesTabPanelId } from '@utils/componentUtils/seriesTab';
import { createVerseOptionId } from '@utils/componentUtils/verseOption';

describe('SeriesTab Test', () => {
  let user: UserEvent;

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  beforeEach(() => {
    user = userEvent.setup();
    const seriesTabs = SERIES_DATA.map(data => (
      <SeriesTab key={data.series_code} data={data} />
    ));
    render(<div role='tabList'>{seriesTabs}</div>);
  });

  afterEach(() => {
    cleanup();
  });

  test('a series tab toggles associated tab panel', async () => {
    const testTab = screen.getByRole('tab', {
      name: SERIES_DATA[0].series_name,
      expanded: false,
    });

    const testTabPanel = screen.getByTestId(
      createSeriesTabPanelId(SERIES_DATA[0].series_code),
    );

    expect(testTabPanel.hidden).toBe(true);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('true');
    expect(testTabPanel.hidden).toBe(false);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);
  });

  test('a multi-depth series tab toggles child series tabs', async () => {
    const testTab = await screen.findByRole('tab', {
      name: SERIES_DATA_HAS_SUB.series_name,
    });

    const testTabPanel = screen.getByTestId(
      createSeriesTabPanelId(SERIES_DATA_HAS_SUB.series_code),
    );

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('true');
    expect(testTabPanel.hidden).toBe(false);

    await waitFor(() => {
      SERIES_DATA_SUB.forEach(data => {
        expect(
          within(testTabPanel).queryByRole('tab', {
            name: data.series_name,
            expanded: false,
          }),
        ).not.toBeNull();
      });
    });

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);

    await waitFor(() => {
      SERIES_DATA_SUB.forEach(data => {
        expect(
          within(testTabPanel).queryByRole('tab', {
            name: data.series_name,
            expanded: false,
          }),
        ).toBeNull();
      });
    });
  });

  test('a single-depth series tab panel has a list of verse checkboxes', async () => {
    const testTab = await screen.findByRole('tab', {
      name: SERIES_DATA_NO_SUB.series_name,
    });

    const testTabPanel = screen.getByTestId(
      createSeriesTabPanelId(SERIES_DATA_NO_SUB.series_code),
    );

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('true');
    expect(testTabPanel.hidden).toBe(false);

    await waitFor(() => {
      VERSE_SUMMARY_DATA.forEach(data => {
        const testCheckbox = within(testTabPanel).getByTestId(
          createVerseOptionId(data),
        );
        expect(testCheckbox.ariaChecked).toBe('false');
      });
    });
  });
});

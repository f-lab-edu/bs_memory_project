import { screen, waitFor, within } from '@testing-library/react';
import {
  SERIES_DATA,
  SERIES_DATA_NO_SUB,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData';
import { userEvent } from '@testing-library/user-event';
import ALERT_MESSAGE from '@/constants/alertMessage';
import { createSeriesTabPanelId } from '@utils/componentUtils/seriesTab';
import { createVerseOptionId } from '@utils/componentUtils/verseOption';
import LINK_TEXTS from '@/constants/linkTexts';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';
import renderHome from '@/lib/test/testUtils/renderHome';
import DIALOG_HEADING_TEXTS from '@/constants/dialogHeadingTexts';

const setup = () => {
  const user = userEvent.setup();
  renderHome();

  return {
    user,
  };
};

describe('HomePage Test', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  beforeEach(() => {
    vi.mock('@store/verseSelectStore', async () => {
      return await vi.importActual('@store/verseSelectStore');
    });
    vi.mock('@store/exam/examConfigModalStore', async () => {
      return await vi.importActual('@store/exam/examConfigModalStore');
    });
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  test('renders "홈으로","암송하기","시험보기" links and series tabs', async () => {
    setup();

    await waitFor(() => {
      expect(
        screen.queryByRole('link', { name: LINK_TEXTS.HOME }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('link', { name: LINK_TEXTS.DRILLING }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('link', { name: LINK_TEXTS.EXAM }),
      ).not.toBeNull();
    });

    await waitFor(() => {
      SERIES_DATA.forEach(data => {
        expect(
          screen.queryByRole('tab', {
            name: data.series_name,
            expanded: false,
          }),
        ).not.toBeNull();
      });
    });
  });

  test('when clicks "drilling" link without selecting verses, alert pops up', async () => {
    const { user } = setup();

    const testNav = await screen.findByRole('link', {
      name: LINK_TEXTS.DRILLING,
    });

    await user.click(testNav);
    expect(window.alert).toHaveBeenCalledWith(ALERT_MESSAGE.VERSE_NOT_SELECTED);
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(
      screen.queryByRole('heading', {
        level: 1,
        name: PAGE_HEADING_TEXTS.HOME,
      }),
    ).not.toBeNull();
  });

  test('when clicks "exam" link without selecting verses, alert pops up and stop navigating', async () => {
    const { user } = setup();

    const testNav = await screen.findByRole('link', {
      name: LINK_TEXTS.EXAM,
    });

    await user.click(testNav);
    expect(window.alert).toHaveBeenCalledWith(ALERT_MESSAGE.VERSE_NOT_SELECTED);
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(
      screen.queryByRole('heading', {
        level: 1,
        name: PAGE_HEADING_TEXTS.HOME,
      }),
    ).not.toBeNull();
  });

  test('when clicks "exam" link after selecting verses, "시험설정" dialog pops up', async () => {
    const { user } = setup();

    const testTab = await screen.findByRole('tab', {
      name: SERIES_DATA_NO_SUB.series_name,
    });

    const testTabPanel = await screen.findByTestId(
      createSeriesTabPanelId(SERIES_DATA_NO_SUB.series_code),
    );

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('true');
    expect(testTabPanel.hidden).toBe(false);

    const testOption = await within(testTabPanel).findByTestId(
      createVerseOptionId(VERSE_SUMMARY_DATA[0]),
    );
    expect(testOption.ariaChecked).toBe('false');

    await user.click(testOption);

    expect(testOption.ariaChecked).toBe('true');

    const testNav = await screen.findByRole('link', {
      name: LINK_TEXTS.EXAM,
    });

    await user.click(testNav);

    await waitFor(() => {
      expect(
        screen.queryByRole('heading', {
          level: 3,
          name: DIALOG_HEADING_TEXTS.EXAMCONFIG,
        }),
      ).not.toBeNull();
    });
  });
});

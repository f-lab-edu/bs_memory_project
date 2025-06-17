import renderRoute from '@/lib/test/testUtils/renderRoute';
import { userEvent } from '@testing-library/user-event';
import mockVerseSelectStore from '@/lib/test/testUtils/mocks/mockVerseSelectStore';
import mockScrollIntoView from '@/lib/test/testUtils/mocks/mockScrollIntoView';
import { screen, waitFor, within } from '@testing-library/react';
import {
  SERIES_DATA_NO_SUB,
  VERSE_DETAIL_DATA_KOR,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData';
import { createSeriesTabPanelId } from '@utils/componentUtils/seriesTab';
import { createAllVerseOptionId } from '@utils/componentUtils/verseOption';
import LINK_TEXTS from '@/constants/linkTexts';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import COMBOBOX_LABEL_TEXTS from '@/constants/comboboxLabelTexts';
import { createVerseCardTestId } from '@utils/componentUtils/verseCard';

describe('DrillingPage Test', () => {
  beforeAll(() => {
    mockScrollIntoView();
    mockVerseSelectStore();
    mockAnimationsApi();
    renderRoute();
  });

  afterAll(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  // todo - navigate 시나리오/렌더링 테스트 분리할 수 있는 방법 찾기
  test('renders "홈으로" and "시험보기" links, "성경버전" and "숨김" options, and card slide', async () => {
    const user = userEvent.setup();

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

    const allCheckbox = within(testTabPanel).getByTestId(
      createAllVerseOptionId(VERSE_SUMMARY_DATA[0].series_code),
    );
    expect(allCheckbox).not.toBeNull();

    await user.click(allCheckbox);

    const testNav = await screen.findByRole('link', {
      name: LINK_TEXTS.DRILLING,
    });

    await user.click(testNav);

    await waitFor(() => {
      expect(
        screen.queryByRole('heading', {
          level: 1,
          name: PAGE_HEADING_TEXTS.DRILLING,
        }),
      ).not.toBeNull();
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('link', { name: LINK_TEXTS.HOME }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('link', { name: LINK_TEXTS.EXAM }),
      ).not.toBeNull();
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('combobox', {
          name: COMBOBOX_LABEL_TEXTS.BIBLE_VERSION,
        }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('combobox', {
          name: COMBOBOX_LABEL_TEXTS.CARD_HIDE_OPTION,
        }),
      );
    });

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: '처음 구절로' }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('button', { name: '다음 구절로' }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('button', { name: '이전 구절로' }),
      ).not.toBeNull();
      expect(
        screen.queryByRole('button', { name: '끝 구절로' }),
      ).not.toBeNull();

      VERSE_DETAIL_DATA_KOR.forEach(data => {
        expect(
          screen.queryByTestId(createVerseCardTestId(data)),
        ).not.toBeNull();
      });
    });
  });
});

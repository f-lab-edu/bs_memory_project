import { describe, test } from 'vitest';

describe('SeriesTab Test', () => {
  // let user: UserEvent;
  //
  // beforeAll(() => {
  //   window.HTMLElement.prototype.scrollIntoView = vi.fn();
  // });
  //
  // beforeEach(() => {
  //   user = userEvent.setup();
  //   const seriesTabs = SERIES_DATA.map(data => (
  //     <SeriesTab key={data.series_code} data={data} />
  //   ));
  //   render(<div role='tabList'>{seriesTabs}</div>);
  // });
  //
  // afterEach(() => {
  //   cleanup();
  // });

  test('when clicks a series tab, associated tabpanel opens', async () => {
    // const testTab = screen.getByRole('tab', {
    //   name: SERIES_DATA[0].series_name,
    // });
    //
    // expect(testTab.ariaExpanded).toBe('false');
    //
    // await user.click(testTab);
    //
    // expect(testTab.ariaExpanded).toBe('true');
    //
    // const panels = await screen.findAllByRole('tabpanel');
    // const testPanel = panels.find(
    //   element => element.id === testTab.getAttribute('aria-controls'),
    // )!;
    // expect(testPanel).toBeDefined();
    // expect(testPanel.hidden).toBe(false);
  });

  test('when clicks a multi-depth series tab, associated tabpanel has child tabs', async () => {
    // const testTab = await screen.findByRole('tab', {
    //   name: SERIES_DATA_HAS_SUB.series_name,
    // });
    //
    // expect(testTab.ariaExpanded).toBe('false');
    //
    // await user.click(testTab);
    //
    // expect(testTab.ariaExpanded).toBe('true');
    //
    // const panels = await screen.findAllByRole('tabpanel');
    // const testPanel = panels.find(
    //   element => element.id === testTab.getAttribute('aria-controls'),
    // )!;
    //
    // expect(testPanel).toBeDefined();
    // expect(testPanel.hidden).toBe(false);
    //
    // const childTabs = await within(testPanel).findAllByRole('tab');
    // childTabs.forEach(element => expect(element.ariaExpanded).toBe('false'));
  });

  test('when clicks a single-depth series tab, associated tabpanel has verse checkboxes', async () => {
    // const testTab = await screen.findByRole('tab', {
    //   name: SERIES_DATA_NO_SUB.series_name,
    // });
    //
    // expect(testTab.ariaExpanded).toBe('false');
    //
    // await user.click(testTab);
    //
    // expect(testTab.ariaExpanded).toBe('true');
    //
    // const panels = await screen.findAllByRole('tabpanel');
    // const testPanel = panels.find(
    //   element => element.id === testTab.getAttribute('aria-controls'),
    // )!;
    //
    // expect(testPanel).toBeDefined();
    // expect(testPanel.hidden).toBe(false);
    //
    // for (const data of VERSE_SUMMARY_DATA) {
    //   const {
    //     theme,
    //     bible_code: { bible_name },
    //     chapter,
    //     verse1,
    //     verse2,
    //   } = data;
    //
    //   const name = `${theme} ${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
    //
    //   await expect(
    //     within(testPanel).findByRole('checkbox', { name, checked: false }),
    //   ).resolves.not.toThrowError();
    // }
  });
});

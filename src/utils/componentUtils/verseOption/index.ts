import { VerseSummaryDatum } from '@features/verseSelect/types/verseSummaryData.types';

export const createVerseOptionId = (verseSummaryData: VerseSummaryDatum) => {
  const { series_code, card_num } = verseSummaryData;

  return `${series_code}-${card_num}`;
};

export const createVerseOptionText = (verseSummaryData: VerseSummaryDatum) => {
  const {
    bible_code: { bible_name },
    chapter,
    verse1,
    verse2,
  } = verseSummaryData;
  return `${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

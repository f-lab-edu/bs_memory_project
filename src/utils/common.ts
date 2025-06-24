import { VerseDetailData } from '@features/verseCardDisplay/components/verseCard/type';

import { ExamVerseDataTypes } from '@features/exam/types/examVerseData.types';
import { VerseSummaryDatum } from '@features/verseSelect/types/verseSummaryData.types';

export const getVerseAddress = (
  data: VerseSummaryDatum | VerseDetailData | ExamVerseDataTypes,
) => {
  const {
    bible_code: { bible_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

export const getShortVerseAddress = (data: VerseDetailData) => {
  const {
    bible_code: { short_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${short_name}${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

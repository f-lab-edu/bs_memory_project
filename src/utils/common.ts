import { VerseDetailData } from '@features/drilling/components/cardDisplay/card/type';
import { VerseSummaryDatum } from '@features/verseSelect/types';
import { ExamVerseData } from '@features/exam/type';

export const getVerseAddress = (
  data: VerseSummaryDatum | VerseDetailData | ExamVerseData,
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

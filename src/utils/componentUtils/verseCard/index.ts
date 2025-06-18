import { VerseDetailData } from '@features/drilling/components/verseDisplay/verseCard/type';

export const createVerseCardTestId = <T extends Pick<VerseDetailData, 'idx'>>(
  data: T,
) => {
  return `verse-card-${data.idx}`;
};

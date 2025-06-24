import { VerseDetailData } from '@features/verseCardDisplay/components/verseCard/type';

export const createVerseCardTestId = <T extends Pick<VerseDetailData, 'idx'>>(
  data: T,
) => {
  return `verse-card-${data.idx}`;
};
